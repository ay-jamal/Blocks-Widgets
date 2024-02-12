import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbDialogModule, NbDialogService } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WidgetModalComponent } from './Widget-Modal/widget-modal.component';

@Component({
  selector: 'app-widget-list',
  standalone: true,
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    FontAwesomeModule,
  ],
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {

  constructor(
    private dialogServie: NbDialogService
  ) {
  }

  ngOnInit(): void {
  }

  widgets = [
    {
      name: 'Block Widget',
      title: 'Block Widget',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi sapiente laborum tempore neque illum cum placeat.',
      image: 'https://fakeimg.pl/600x400/f3f3f5/909090'
    },
  ];

  openWidgetDetails() {
    this.dialogServie.open(WidgetModalComponent)
  }

}
