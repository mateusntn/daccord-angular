import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lesson-delete',
  templateUrl: './lesson-delete.component.html',
  styleUrls: ['./lesson-delete.component.css']
})
export class LessonDeleteComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<LessonDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private service: LessonService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  delete(): void {
    this.service.delete(this.data).subscribe((response) => {
      this.router.navigate(["lesson"]);
      this.onNoClick();
      this.service.message("Lição deletada com sucesso!");
    }, err => {
      this.service.message('Não é possível deletar a lição.')
    });
  }
}
