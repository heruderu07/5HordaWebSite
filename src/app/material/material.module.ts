import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule
]

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }
