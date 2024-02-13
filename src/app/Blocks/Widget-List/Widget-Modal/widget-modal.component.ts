import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbDialogRef } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-widget-modal',
  standalone: true,
  imports: [
    CommonModule,
    NbCardModule,
    FontAwesomeModule,
    AgGridModule,
    NbButtonModule,
  ],
  templateUrl: './widget-modal.component.html',
  styleUrls: ['./widget-modal.component.scss']
})
export class WidgetModalComponent {

  constructor(
    private dialogRef: NbDialogRef<any>
  ) {
  }

  gridApi: any;

  // Event handler for when the grid is ready
  onGridReady(event: any) {
    this.gridApi = event.api;
    console.log(event);
  }

  // Method to capture and insert the selected text
  captureAndInsertDescription() {
    const selectedText = window.getSelection()?.toString(); // Get the selected text
    console.log(selectedText);
    if (selectedText) {
      const newItem = {
        id: String(this.rowData.length),
        title: selectedText,
        description: '',
        electric: false,
      };
      this.rowData = [...this.rowData, newItem]; // Update the rowData array with the new item
    }
  }

  // Initial data for the grid
  rowData = [
    { id: "0", title: "title 1", description: '', },
    { id: "1", title: "title 2", description: '', },
    { id: "2", title: "title 3", description: '', },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    {
      field: "id",
      headerName: '#',
      maxWidth: 50,
      resizable: false,
    },
    {
      field: "title",
      headerName: 'Selected Text',
    },
    {
      field: "description",
      headerName: 'Description',
      minWidth: 100,
      flex: 1,
      editable: true
    },
    {
      headerName: 'Edit',
      resizable: false,
      maxWidth: 70,
    },
  ];

  // Method to close the modal
  close(res: any) {
    this.dialogRef.close(res)
  }
}