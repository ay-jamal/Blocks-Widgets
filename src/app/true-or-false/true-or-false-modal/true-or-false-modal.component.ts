import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbDialogRef, NbRadioModule } from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ColDef } from 'ag-grid-community';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-true-or-false-modal',
  standalone: true,
  imports: [CommonModule,
    NbCardModule,
    FormsModule,
    AgGridModule,
    FontAwesomeModule,
    NbButtonModule,
    NbRadioModule,
  ],
  templateUrl: './true-or-false-modal.component.html',
  styleUrls: ['./true-or-false-modal.component.scss']
})
export class TrueOrFalseModalComponent {

  @Input() TextContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laudantium eveniet! Ut ipsum nam autem dolores? Voluptatibus reprehenderit, errorperspiciatis facilis libero magnam repudiandae accusamus commodi'

  constructor(
    private dialogRef: NbDialogRef<any>
  ) {
  }

  gridApi: any;

  questionObject = {
    question: '',
    isTrue: null,
    isFalse: null,
    difficulty: null,
    type: null,
    level: null,
  };

  // Event handler for when the grid is ready
  onGridReady(event: any) {
    this.gridApi = event.api;
    console.log(event);
  }

  createQuestion() {
    const { question, isTrue, isFalse, difficulty, type, level } = this.questionObject;
    const newRow = {
      id: String(this.rowData.length),
      Question: question,
      isTrue: isTrue ? '1' : '0',
      isFalse: isTrue ? '0' : '1',
      Diffeculty: Number(difficulty),
      Level: String(level),
      Type: Number(type),
      del: '',
    };
    console.log(newRow);
    this.rowData = [...this.rowData, newRow]; // Update the rowData array with the new item
    // Clear questionObject values
    this.questionObject.question = '';
    this.questionObject.isTrue = null;
    this.questionObject.isFalse = null;
    this.questionObject.difficulty = null;
    this.questionObject.type = null;
    this.questionObject.level = null;
  }


  // Initial data for the grid
  rowData = [
    { id: "0", Question: "Question 1", isTrue: '0', isFalse: '1', Diffeculty: 3, Type: 1, del: '' },
    { id: "1", Question: "Question 2", isTrue: '1', isFalse: '0', Diffeculty: 2, Type: 2, del: '' },
    { id: "2", Question: "Question 3", isTrue: '0', isFalse: '1', Diffeculty: 1, Type: 3, del: '' },
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
      field: "Question",
      headerName: 'Question',
    },
    {
      field: "isTrue",
      headerName: 'isTrue',
      minWidth: 100,
      flex: 1,
      editable: true
    },
    {
      field: "isFalse",
      headerName: 'isFalse',
      minWidth: 100,
      flex: 1,
      editable: true
    },
    {
      field: "Diffeculty",
      headerName: 'Diffeculty',
      minWidth: 100,
      flex: 1,
      editable: true
    },
    {
      field: "Type",
      headerName: 'Type',
      minWidth: 100,
      flex: 1,
      editable: true
    },
    {
      headerName: 'Del',
      resizable: false,
      maxWidth: 70,
      cellRenderer: (params: any) => {
        return `
        <span>
        <i class="fa-solid fa-trash"></i>
        </span>
        `
      }
    },
  ];

  // Method to close the modal
  close(res: any) {
    this.dialogRef.close(res)
  }

}
