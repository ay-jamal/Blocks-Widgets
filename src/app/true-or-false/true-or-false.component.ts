import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogService } from '@nebular/theme';
import { TrueOrFalseModalComponent } from './true-or-false-modal/true-or-false-modal.component';

@Component({
  selector: 'app-true-or-false',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './true-or-false.component.html',
  styleUrls: ['./true-or-false.component.scss']
})
export class TrueOrFalseComponent implements OnInit {

  constructor(
    private dialogService:NbDialogService
  ){
  }

  ngOnInit(): void {
   this.dialogService.open(TrueOrFalseModalComponent)
  }

}
