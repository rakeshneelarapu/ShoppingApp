import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

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
      name: new FormControl('', []),
      dob: new FormControl('', []),
      email: new FormControl('', []),
      phone: new FormControl('', []),
      address: this.fb.group({
        addressLine1: new FormControl('', []),
        addressLine2: new FormControl('', []),
        city: new FormControl('', []),
        pincode: new FormControl('', [])
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
      cardNumber: new FormControl('', []),
      expiryMonth: new FormControl('', []),
      expiryYear: new FormControl('', []),
      cvv: new FormControl('', [])
    });
  }
}
