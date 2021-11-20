import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LessonComponent } from "./views/lesson/lesson.component";
import { LessonCreateComponent } from "./views/lesson/lesson-create/lesson-create.component";

const routes: Routes = [
  {
    path: "lesson",
    component: LessonComponent,
  },
  {
    path: "lesson/create",
    component: LessonCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
