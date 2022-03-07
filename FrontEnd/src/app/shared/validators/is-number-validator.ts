import { AbstractControl, ValidationErrors } from '@angular/forms';

export class IsNumberValidator {
    static number(control: AbstractControl): ValidationErrors | null {
        if (typeof +control.value === "number" && !isNaN(+control.value) && +control.value >= 0) return null;
        return { notANumber: "The value is not a number"};
    };
}