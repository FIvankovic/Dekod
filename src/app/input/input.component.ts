import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
    inputForm: FormGroup;
    isSubmitted: boolean = false;

    constructor(private fb: FormBuilder){
      this.inputForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dateOfBirth: ['',Validators.required],
        jobTitle:['', Validators.required]
      });
    }//constructor end

    ngOnInit(): void {}

    onSubmit(): void{
      this.isSubmitted = true;
      if(this.inputForm.valid){
        console.log(this.inputForm.value);
      } else {
        console.log("Unešeni podaci nisu ispravni.");
      }
    }
}
