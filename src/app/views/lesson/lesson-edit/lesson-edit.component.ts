import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { Lesson } from '../lesson.model';
import { LessonService } from '../lesson.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.css']
})
export class LessonEditComponent implements OnInit {
  editor = ClassicEditor;
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

  constructor(private service: LessonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lesson.id = Number(this.route.snapshot.paramMap.get("id")!);
    this.findById();
  }

  editLesson(): void {
    this.service.update(this.lesson).subscribe(() => {
        this.service.message('Lição editada com sucesso.');
        this.router.navigate([`lesson`]);
    })
  }

  findById(): void {
    this.service.findById(this.lesson.id!).subscribe((response) => {
      this.lesson = response;
    });
  }

  counter(i: number) {
    return new Array(i);
  }
}
