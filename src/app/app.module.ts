import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { LessonComponent } from "./views/lesson/lesson.component";
import { LessonCreateComponent } from "./views/lesson/lesson-create/lesson-create.component";
import { LessonDeleteComponent } from './views/lesson/lesson-delete/lesson-delete.component';
import { LessonEditComponent } from './views/lesson/lesson-edit/lesson-edit.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LessonComponent,
    LessonCreateComponent,
    LessonDeleteComponent,
    LessonEditComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatCardModule,
    CKEditorModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
