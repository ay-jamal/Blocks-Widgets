import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [CommonModule,
    FontAwesomeModule

  ],
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements ICellRendererAngularComp {
  params: any
  index: any;

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params
    this.index = params.node.rowIndex
    console.log(params);
  }

  deleteRow(): void {
    const { data } = this.params;
    const index = this.params.node.rowIndex;
    this.params.api.applyTransaction({ remove: [data] }); // Remove the row from the grid
    this.params.api.refreshCells({ rowNodes: [this.params.node] }); // Refresh the grid to reflect the changes
    this.params.context.component.deleteRow(index); // Remove the row from the rowData array
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }

}
