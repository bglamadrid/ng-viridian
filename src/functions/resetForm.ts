import { AbstractControl, FormGroup, FormArray, FormControl } from '@angular/forms';

export function resetForm(form: AbstractControl): void {
  form.reset();
  form.setErrors(null);
  if (form instanceof FormGroup) {
    for (const controlName in form.controls) {
      if (form.controls.hasOwnProperty(controlName)) {
        resetForm(form.controls[controlName]);
      }
    }
  } else if (form instanceof FormArray) {
    form.controls.forEach(
      ac => {
        resetForm(ac);
      }
    );
  }
}
