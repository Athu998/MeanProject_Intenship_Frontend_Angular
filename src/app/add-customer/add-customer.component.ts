import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  peopleInfo = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    contact_person: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    dept: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    city: new FormControl('Mumbai', Validators.required),
    state: new FormControl('Maharashtra', Validators.required),
    country: new FormControl('India', Validators.required),
    state_code: new FormControl('', Validators.required),
    status: new FormControl('Inactive', Validators.required),
    gstno: new FormControl('', Validators.required),
    panNo: new FormControl('', Validators.required),
  });

  submitForm() {
    if (this.peopleInfo.invalid) {
      alert('Please fill all required fields');
      return;
    }

    // ✅ SHOW ALL FORM DATA IN ALERT
    alert(
      'Customer Details:\n\n' +
      JSON.stringify(this.peopleInfo.value, null, 2)
    );

    console.log(this.peopleInfo.value);
  }
}
