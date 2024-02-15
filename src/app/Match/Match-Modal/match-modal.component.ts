import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbDialogRef, NbRadioModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { DeleteButtonComponent } from 'src/app/true-or-false/delete-button/delete-button.component';

@Component({
  selector: 'app-match-modal',
  standalone: true,
  imports: [
    CommonModule,
    NbCardModule,
    FormsModule,
    AgGridModule,
    FontAwesomeModule,
    NbButtonModule,
  ],
  templateUrl: './match-modal.component.html',
  styleUrls: ['./match-modal.component.scss']
})
export class MatchModalComponent {
  @Input() TextContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laudantium eveniet! Ut ipsum nam autem dolores? Voluptatibus reprehenderit, errorperspiciatis facilis libero magnam repudiandae accusamus commodi'
  gridApi: any;

  constructor(
    private dialogRef: NbDialogRef<any>
  ) {
  }

  onGridReady(event: any) {
    this.gridApi = event.api;
    console.log(event);
  }

  matchObject = {
    AInfo: '',
    BInfo: '',
  }

  submit() {
    // Generate unique IDs for AImage and BImage
    const uniqueAImageId = Math.floor(Math.random() * 10000);
    const uniqueBImageId = Math.floor(Math.random() * 10000);


    // Create a new row data object
    const newRowData = {
      id: (this.rowData.length + 1).toString(),
      AID: (this.rowData.length + 1).toString(),
      AInfo: this.matchObject.AInfo,
      AImage: uniqueAImageId.toString(),
      BID: (this.rowData.length + 1).toString(),
      BInfo: this.matchObject.BInfo,
      BImage: uniqueBImageId.toString(),
      GROUPID: (this.rowData.length + 1).toString()
    };

    // Push the new row data object to the rowData array
    this.rowData = [...this.rowData, newRowData]; // Update the rowData array with the new item

    // Reset matchObject properties
  }

  rowData: any = [
    { id: "1", AID: "1", AInfo: 'information', AImage: '1233', BID: '1', BInfo: 'information', BImage: '8765', GROUPID: '4', del:'' },
  ];


    deleteRow(index: number): void {
    this.rowData.splice(index, 1);
  }


  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    {
      field: "id",
      headerName: '#',
      maxWidth: 50,
      resizable: false,
    },
    {
      field: "AID",
      headerName: 'A AD',
      maxWidth: 70
    },
    {
      field: "AInfo",
      headerName: 'A(Info)',
      flex: 1,
      editable: true,
      minWidth: 50
    },
    {
      field: "AImage",
      headerName: 'A Image',
      flex: 1,
      editable: true,
      minWidth: 50
    },
    {
      field: "BID",
      headerName: 'B ID',
      flex: 1,
      editable: true,
    },
    {
      field: "BInfo",
      headerName: 'B(Info)',
      flex: 1,
      editable: true,
      minWidth: 50
    },
    {
      field: "BImage",
      headerName: 'B Image',
      flex: 1,
      minWidth: 50
    },
    {
      field: "GROUPID",
      headerName: 'Group Id',
      flex: 1,
      minWidth: 100
    },
    {
      headerName: 'Del',
      resizable: false,
      maxWidth: 70,
      cellRenderer: DeleteButtonComponent,
    },
  ];

  close(res: any) {
    this.dialogRef.close()
  }
}
