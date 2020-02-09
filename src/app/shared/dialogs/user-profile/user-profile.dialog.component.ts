import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { finalize } from 'rxjs/operators';
import { PersonProfileCrudHttpService } from 'src/app/services/http/crud/person-profile.crud.http.service';
import { PersonFormComponent } from 'src/app/shared/components/person-form/person-form.component';
import { MSG_ERR_SRV_COMMUNICATION, MSG_WRN_INCOMPLETE_FORM } from 'src/app/shared/i18/es/messages';
import { PersonProfile } from 'src/models/entities/PersonProfile';

export interface UserProfileDialogData {
  person: PersonProfile;
}

@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile.dialog.component.html',
  styleUrls: ['./user-profile.dialog.component.sass']
})
export class UserProfileDialogComponent {

  public saving: boolean;

  @ViewChild('personForm', {static: false}) public personForm: PersonFormComponent;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserProfileDialogData,
    protected dialogRef: MatDialogRef<UserProfileDialogComponent>,
    protected snackBar: MatSnackBar,
    protected profileHttpSvc: PersonProfileCrudHttpService
  ) {
    this.saving = false;
  }

  protected savePersonProfile(personProfile: PersonProfile): void {
    this.saving = true;

    this.profileHttpSvc.create(personProfile).pipe(
      finalize(() => { this.saving = false; })
    ).subscribe(
      () => {
        if (personProfile.id) {
          this.snackBar.open('Profile created sucessfully');
        } else {
          this.snackBar.open('Profile updated sucessfully');
        }
        this.dialogRef.close(personProfile);
      },
      err => {
        console.log(err);
        this.snackBar.open(MSG_ERR_SRV_COMMUNICATION, 'OK', {duration: -1});
      }
    );
  }

  public onClickAccept(): void {
    const personProfile = this.personForm.person;
    if (!personProfile) {
      this.snackBar.open(MSG_WRN_INCOMPLETE_FORM, 'OK', { duration: -1 });
      return null;
    } else {
      personProfile.id = this.data.person.id;
      this.savePersonProfile(personProfile);
    }
  }

  public onClickCancel(): void {
    this.dialogRef.close(null);
  }

}
