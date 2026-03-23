import { Component, inject, OnInit } from '@angular/core';
import { ViewCustomerService } from '../../Services/view-customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateCustService } from '../../Services/update-cust.service';
//import { UpdateEmpService } from '../../Services/update-cust.service';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {

  private dataServices = inject(ViewCustomerService);
  private updateUserservice = inject(UpdateCustService)

  searchText: string = '';
  userData: any[] = [];
  filterData: any[] = [];
  isLoading: boolean = false;
selectedUser: any = null;
showEditForm: boolean = false;

  ngOnInit(): void {
    this.seeUsers();
  }

  seeUsers(): void {
    this.isLoading = true;

    this.dataServices.seeCustomer().subscribe({
      next: (res: any) => {
        this.userData = res || [];
        this.filterData = [...this.userData]; 
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }


  filterUsers(): void {
    const value = this.searchText.toLowerCase();

    if (!value) {
      this.filterData = [...this.userData];
      return;
    }

    this.filterData = this.userData.filter(user =>
      user.name?.toLowerCase().includes(value) ||
      user.number?.toString().includes(value) ||
      user.city?.toLowerCase().includes(value) ||
      user.state?.toLowerCase().includes(value)
    );
  }
 getUser(data: any) {
  this.selectedUser = { ...data };
  this.showEditForm = true;
}

updateUser() {

  this.updateUserservice
    .updateCustomer(this.selectedUser.id, {
      number: this.selectedUser.number,
      address: this.selectedUser.address
    })
    .subscribe({
      next: (res) => {
        console.log("Updated Successfully");
        this.showEditForm = false;
        this.seeUsers();
      },
      error: (err) => console.error(err)
    });

}


  closeForm(){
    this.showEditForm = false;
  }
}
