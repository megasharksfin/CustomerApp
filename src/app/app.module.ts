import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule,
  MatIconModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatPaginatorModule} from '@angular/material';
import { MenuCompComponent } from './menu-comp/menu-comp.component';
import { CustTableComponent } from './cust-table/cust-table.component';
import { MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ToolbarsComponent } from './toolbars/toolbars.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    MenuCompComponent,
    CustTableComponent,
    CreateComponent,
    ToolbarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
