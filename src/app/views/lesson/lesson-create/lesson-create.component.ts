import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Question } from 'src/app/models/question.model';
import { Alternative } from 'src/app/models/alternative.model';
import { Lesson } from '../lesson.model';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.css']
})
export class LessonCreateComponent implements OnInit {
  editor = ClassicEditor;
  fileToUpload: File = null;
  quantity: number = 1;

  
  questions: Question[] = [
    {
      questionText: "",
      alternatives: [],
      correctAlternative: ""
    }
  ];
  lesson: Lesson = {
    title: "",
    description: "",
    instrument: "",
    author: "",
    genre: "",
    level: "",
    article: "",
    articleLegend: "",
    linkVideo: "",
    videoLegend: "",
    performanceExercise: "",
    exerciseLegend: "",
    questions: this.questions
  }
  
  
  
  instruments: String[] = ['Violão', 'Piano', 'Violino', 'Saxofone', 'Cavaquinho'];
  
  levels: String[] = ['Fácil', 'Médio', 'Difícil'];
  
  constructor(private service:LessonService, private router: Router) { }
  
  ngOnInit(): void {
  }

  searchForm: FormGroup;
  
  addField() {
    this.quantity += 1;
  }
  
  counter(i: number) {
    return new Array(i);
  }

  createLesson(): void {
    this.service.create(this.lesson).subscribe(() => {
      this.service.message('Lição criada com sucesso.');
      this.router.navigate([`/lessons/`]);
    })
  }
  
  changeInstrument(instrument: String) {
    this.lesson.instrument = instrument;
  }
  
  changeLevel(level: String) {
    this.lesson.level = level;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}