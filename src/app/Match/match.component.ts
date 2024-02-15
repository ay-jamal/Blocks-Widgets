import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbDialogService } from '@nebular/theme';
import { MatchModalComponent } from './Match-Modal/match-modal.component';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [
    CommonModule,
    AgGridModule,
    NbCardModule,
    FontAwesomeModule],
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService
  ) {
  }

  ngOnInit(): void {
    this.dialogService.open(MatchModalComponent)
  }

}
