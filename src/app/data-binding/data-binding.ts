import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,  CommonModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  firstName: string = '';
  lastName: string = '';
  rollNo: string = '';
  isActive: boolean = false;
  currentDate: String = new Date().toISOString().slice(0, 10);
  divClass: string = 'bg-primary text-white p-3';
  colour: string = 'red';
  employees: any[] = [
    { name: 'John Doe', age: 30, position: 'Developer' },
    { name: 'Jane Smith', age: 25, position: 'Designer' },
    { name: 'Mike Johnson', age: 35, position: 'Manager' }
  ];

  // Constructor to initialize component properties
  // and log initial values to the console

  constructor() {
    console.log('DataBinding component initialized', this.currentDate, this.isActive,this.firstName, this.lastName, this.rollNo);
    this.firstName = 'Jatin';
    this.lastName = 'Anand';
    this.rollNo = '12345';
    this.isActive = true;
    this.employees.push({ name: 'Alice Brown', age: 28, position: 'Tester' });
    this.divClass = 'bg-success text-white p-3';
    this.colour = 'blue';
    this.currentDate = new Date().toISOString().slice(0, 10);
    console.log('DataBinding component updated', this.currentDate, this.isActive, this.firstName, this.lastName, this.rollNo);
  }
  ngOnInit() {
    console.log('DataBinding component ngOnInit called', this.currentDate, this.isActive, this.firstName, this.lastName, this.rollNo);
    console.log(this.getUserDetails());
  }

  showWelcomeMessage() {
    alert('Welcome to Data Binding Component');
    console.log('Welcome to Data Binding Component');
  }

  onColorChange(event: any) {
    this.colour = event.target.value;
    console.log('DataBinding component onColorChange called', event.target.value);
  }

  toggleActive() {
    this.isActive = !this.isActive;
    console.log('DataBinding component toggleActive called', this.isActive);
  }

  updateDetails() {
    this.firstName = 'Updated Jatin';
    this.lastName = 'Updated Anand';
    this.rollNo = '54321';
    console.log('DataBinding component updateDetails called', this.currentDate, this.isActive, this.firstName, this.lastName, this.rollNo);
  }
  resetDetails() {
    this.firstName = '';
    this.lastName = '';
    this.rollNo = '';
    this.isActive = false;
    console.log('DataBinding component resetDetails called', this.currentDate, this.isActive, this.firstName, this.lastName, this.rollNo);
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getRollNo(): string {
    return this.rollNo;
  }

  isUserActive(): boolean {
    return this.isActive;
  }

  getCurrentDate(): String {
    return this.currentDate;
  }

  getUserDetails(): string {
    return `Name: ${this.getFullName()}, Roll No: ${this.getRollNo()}, Active: ${this.isUserActive()}`;
  } 
}
