import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetListComponent } from './Widget-List/widget-list.component';
import { NbCardModule } from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [
    CommonModule,
    WidgetListComponent,
    NbCardModule,
    FontAwesomeModule
  ],
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent {

}
