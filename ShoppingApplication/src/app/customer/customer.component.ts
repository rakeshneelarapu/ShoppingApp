import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    /*Example for Model Driven Forms*/
    this.customerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      address: this.fb.group({
        addressLine1: new FormControl('', [Validators.required]),
        addressLine2: new FormControl('', []),
        city: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [Validators.required])
      }),
      cards: this.fb.array([this.buildForm()])
    });
  }

  // To ADD a CARD
  addCard() {
    const card = this.customerForm.controls['cards'] as FormArray;
    card.push(this.buildForm());
  }
  // TO Remove a CARD
  removeCard(i: number) {
    const card = this.customerForm.controls['cards'] as FormArray;
    card.removeAt(i);
  }

  // COMMON FUNCTION to BUILD CARD
  buildForm() {
    return this.fb.group({
      cardNumber: new FormControl('', [Validators.required]),
      expiryMonth: new FormControl('', [Validators.required]),
      expiryYear: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required])
    });
  }

  addCustomer() {
    console.log(this.customerForm.value);
    this.customerForm.reset();
  }
}
