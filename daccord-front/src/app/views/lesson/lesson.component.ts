import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Lesson } from "./lesson.model";
import { LessonService } from "./lesson.service";

@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.css"],
})
export class LessonComponent implements OnInit {
  lessons: Lesson[];

  constructor(private service:LessonService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((response) => {
        this.lessons = response;
        console.log(response);
    });    
  }
}
