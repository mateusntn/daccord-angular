import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LessonComponent } from "./views/lesson/lesson.component";
import { LessonCreateComponent } from "./views/lesson/lesson-create/lesson-create.component";
import { LessonEditComponent } from "./views/lesson/lesson-edit/lesson-edit.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "lesson",
    component: LessonComponent,
  },
  {
    path: "lesson/create",
    component: LessonCreateComponent,
  },
  {
    path: "lesson/edit/:id",
    component: LessonEditComponent,
  },
  {
    path: "",
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
