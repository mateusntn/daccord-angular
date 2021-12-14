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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LessonComponent,
    LessonCreateComponent,
    LessonDeleteComponent,
    LessonEditComponent,
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
