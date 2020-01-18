import { Observable, Subject, of } from 'rxjs';
import { DataGridTemplateComponent } from './data-grid.template.component';
import { CrudHttpService } from 'src/services/http/crud/.crud.http.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { OnInit } from '@angular/core';
import { finalize, catchError } from 'rxjs/operators';
import { MSG_INF_UNSUPPORTED_OPERATION } from 'src/assets/standard_messages';

export abstract class DataManagerTemplateComponent<T>
  implements OnInit {

  protected itemsSource: Subject<T[]>;

  protected httpService: CrudHttpService<T>;
  protected dialog: MatDialog;
  protected snackBar: MatSnackBar;

  public loading: boolean;
  public busyScreen: boolean;
  public items$: Observable<T[]>;

  public dataGrid: DataGridTemplateComponent<T>;

  constructor() {
    this.loading = false;
    this.busyScreen = false;

    this.itemsSource = new Subject();
    this.items$ = this.itemsSource.asObservable();
  }

  ngOnInit() {
    this.tryLoadingItems();
  }

  public loadItems(): Observable<T[]> {
    throw Error(MSG_INF_UNSUPPORTED_OPERATION);
  }

  public openItemDetailsDialog(item: T): Observable<T> {
    throw Error(MSG_INF_UNSUPPORTED_OPERATION);
  }

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

  public tryLoadingItems(): void {
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
        this.snackBar.open('Item couldn\'t be loaded.');
        return null;
      }),
      finalize(() => { this.onItemSent(); })
    ).subscribe(
      (editedItem: T) => {
        if (editedItem) { this.tryLoadingItems(); }
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
        if (newItem) { this.tryLoadingItems(); }
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
