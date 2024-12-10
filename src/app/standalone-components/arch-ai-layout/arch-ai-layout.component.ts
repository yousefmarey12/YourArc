import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
@Component({
  selector: 'app-arch-ai-layout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './arch-ai-layout.component.html',
  styleUrl: './arch-ai-layout.component.css'
})
export class ArchAiLayoutComponent {
  archForm = new FormGroup({
    city: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required)
  })
  @Output() output = new EventEmitter<void>()

  onSubmit() {
    console.log(this.archForm.value)
    this.output.emit()
  }
}
