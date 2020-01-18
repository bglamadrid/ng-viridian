import { MatSnackBarConfig } from '@angular/material';

export const APPLICATION_NAME = 'Aplicación Web Forein';

/**
 * Tell Reactive Forms not to trigger form validation events.
 * Compatible with all control-manipulation functions that accept option objects, such as .setValue().
 * It's encouraged to call .updateValueAndValidity() on the same control, when needed, after using this.
 */
export const NO_REACTIVE_FORM_EVENTS = { onlySelf: true, emitEvent: false };

/**
 * Commonly-used config presets for certain snackbar patterns.
 */
export const SNACKBAR_DEFAULTS: { [key: string]: MatSnackBarConfig } = {
  infinite_duration: { duration: -1 }
};
