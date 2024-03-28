import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,]
,
})

export class AppComponent {
  name = 'MasterAngular';
}
