import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { LessonDeleteComponent } from "./lesson-delete/lesson-delete.component";
import { Lesson } from "./lesson.model";
import { LessonService } from "./lesson.service";

@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.css"],
})
export class LessonComponent implements OnInit {
  lessons: Lesson[];

  instruments: String[] = ['Violão', 'Piano', 'Violino', 'Saxofone', 'Cavaquinho'];

  levels: String[] = ['Fácil', 'Médio', 'Difícil'];

  instrumentFilter: string = "";
  levelFilter: string = "";

  constructor(private service:LessonService, public dialog: MatDialog, private router: Router,) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((response) => {
        this.lessons = response;
    });    
  }

  findAllFilter() {
    this.service.findAllFilter(this.instrumentFilter, this.levelFilter).subscribe((response) => {
      this.lessons = response;
    });
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(LessonDeleteComponent, {
      width: '30%',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      this.findAll();
    });
  }

  changeInstrumentFilter(instrument: string) {
    this.instrumentFilter = instrument;
    this.findAllFilter();
  }
  
  changeLevelFilter(level: string) {
    this.levelFilter = level;
    this.findAllFilter();
  }
}
