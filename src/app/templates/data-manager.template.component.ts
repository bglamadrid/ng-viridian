import { Observable, Subject, of } from 'rxjs';
import { DataGridTemplateComponent } from './data-grid.template.component';
import { CrudHttpService } from 'src/services/http/crud/.crud.http.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { OnInit } from '@angular/core';
import { finalize, catchError } from 'rxjs/operators';
import { MSG_INF_UNSUPPORTED_OPERATION } from 'src/assets/standard_messages';
import { AbstractEntity } from 'src/models/AbstractEntity';
import { LBL_ITEM_NOT_LOADED } from 'src/assets/standard_labels';

export abstract class DataManagerTemplateComponent<T extends AbstractEntity>
  implements OnInit {

  public loading: boolean;
  public busyScreen: boolean;
  public items$: Observable<T[]>;
  public dataGrid: DataGridTemplateComponent<T>;
  protected itemsSource: Subject<T[]>;

  protected httpService: CrudHttpService<T>;
  protected dialog: MatDialog;
  protected snackBar: MatSnackBar;

  constructor() {
    this.loading = false;
    this.busyScreen = false;

    this.itemsSource = new Subject();
    this.items$ = this.itemsSource.asObservable();
  }

  ngOnInit() {
    this.tryLoadItems();
  }

  protected abstract openItemDetailsDialog(item: T): Observable<T>;
  protected abstract loadItems(): Observable<T[]>;

  protected onItemsLoaded(items: T[]): void {
    this.itemsSource.next(items);
    this.loading = false;
  }

  protected onItemSent(): void {
    this.busyScreen = false;
  }

  protected promptEdit(item: T): Observable<T> {
    this.busyScreen = true;
    return this.openItemDetailsDialog(item);
  }

  public tryLoadItems(): void {
    if (!this.loading) {
      this.loading = true;
      this.loadItems().pipe(
        catchError(() => []),
        finalize(() => { this.loading = false; })
      ).subscribe(items => { this.onItemsLoaded(items); } );
    }
  }

  public onClickEdit(item: T): void {
    this.promptEdit(item).pipe(
      catchError(err => {
        this.snackBar.open(LBL_ITEM_NOT_LOADED);
        return null;
      }),
      finalize(() => { this.onItemSent(); })
    ).subscribe(
      (editedItem: T) => {
        if (editedItem) { this.tryLoadItems(); }
      },
      err => {
        console.log(err);
      }
    );
  }

  public onClickAdd(): void {
    this.promptEdit(undefined).pipe(
      finalize(() => { this.onItemSent(); })
    ).subscribe(
      (newItem: T) => {
        if (newItem) { this.tryLoadItems(); }
      },
      err => {
        console.log(err);
      }
    );
  }

  public onClickDelete(item: T): void {
    throw Error(MSG_INF_UNSUPPORTED_OPERATION);
  }

}
