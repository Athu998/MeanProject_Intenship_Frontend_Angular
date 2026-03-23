import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeptInfoServiceService } from '../../Services/dept-info-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  isLoading = false;
  isStateLoading = false;
  departments: any[] = [];
 previewArray: any[] = [];
 editIndex: number | null = null;

  constructor(
    private router: Router,
    private Deptinfo: DeptInfoServiceService,
    private userService: UserServiceService
  ) {}

  peopleInfo = new FormGroup({

    id: new FormControl<string | null>('', Validators.required),
    name: new FormControl<string | null>('', Validators.required),

    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.email
    ]),

    contact_person: new FormControl<string | null>('', Validators.required),

    number: new FormControl<string | null>('', [
      Validators.required,
      Validators.pattern(/^[6-9]\d{9}$/)
    ]),

    dept: new FormControl<string | null>('', Validators.required),

    address: new FormControl<string | null>('', Validators.required),
    location: new FormControl<string | null>('', Validators.required),

    city: new FormControl<string | null>('', Validators.required),

    state: new FormControl<string | null>(
      { value: '', disabled: true },
      Validators.required
    ),

    state_code: new FormControl<string | null>(
      { value: '', disabled: true },
      Validators.required
    ),

    country: new FormControl<string | null>('India', Validators.required),

    status: new FormControl<string | null>('', Validators.required),

    gstno: new FormControl<string | null>('', Validators.required),

    panNo: new FormControl<string | null>(
      { value: '', disabled: true },
      Validators.required
    )
  });

  ngOnInit(): void {

    this.Deptinfo.getDept().subscribe(res => {
      this.departments = res;
    });

    this.peopleInfo.get('gstno')?.valueChanges.subscribe(
      (gst: string | null) => {

        if (!gst || gst.length < 15) return;

        const stateCode = Number(gst.substring(0, 2));
        const pan = gst.substring(2, 12);

        this.peopleInfo.patchValue({ panNo: pan });

        this.isStateLoading = true;

        this.Deptinfo.getStateByCode(stateCode).subscribe({
          next: (res: any) => {
            this.peopleInfo.patchValue({
              state: res.state,
              state_code: res.state_code
            });
            this.isStateLoading = false;
          },
          error: () => {
            this.isStateLoading = false;
            console.log('Invalid GST State Code');
          }
        });
      }
    );

    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 1500);
  }

// Add to preview using array preview
addToPreview(): void {

  if (this.peopleInfo.invalid) {
    this.peopleInfo.markAllAsTouched();
    return;
  }

  const data = this.peopleInfo.getRawValue();

  if (this.editIndex !== null) {
    this.previewArray[this.editIndex] = data;
    this.editIndex = null;
  } else {
    this.previewArray.push(data);
  }

  this.peopleInfo.reset({
    city: '',
    country: ''
  });

}
isInvalid(controlName: string): boolean {
  const control = this.peopleInfo.get(controlName);
  return !!(control && control.touched && control.invalid);
}


//Data Submision to backend using service
submitAll(): void {

  if (this.previewArray.length === 0) {
    alert('No records to submit');
    return;
  }

  this.userService.addUser(this.previewArray).subscribe({
    next: () => {
      alert('All Customers Submitted Successfully');
      this.previewArray = [];
    },
    error: () => {
      alert('Error while submitting data');
    }
  });
}


//Edit Row Logic
editRow(index: number): void {

  const selectedRow = this.previewArray[index];

  this.peopleInfo.patchValue(selectedRow);

  this.editIndex = index;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
