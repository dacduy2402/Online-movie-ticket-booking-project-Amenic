import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPasswordRoutingModule } from './user-password-routing.module';
import { UserPasswordComponent } from './user-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    UserPasswordComponent
  ],
  imports: [
    CommonModule,
    UserPasswordRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,

  ]
})
export class UserPasswordModule { }
