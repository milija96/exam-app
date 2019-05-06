import { Component, OnInit, ViewChild } from '@angular/core';
import { IExams } from 'src/app/models/models';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { SubjectService } from 'src/app/services/subject.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  currentSub: string;
  currentExam: IExams;
  @ViewChild('editModal') editModal: any;
  @ViewChild('editForm') editForm: any;
  exams: Array<IExams> = []
  constructor(public ngxSmartModalService: NgxSmartModalService,
              public subject: SubjectService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.subject.getExams()
    .subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        res[i].id = res[i].id_kolokvijuma;
        res[i].groups = res[i].grupe;
        res[i].name = res[i].naziv_kolokvijuma;
        this.exams.push(res[i])
      }
    })
  }


  addExam(data: any) {
    if (data.value.name == null || data.value.name.length == 0) {
      this.toastr.error('Ispunite sva polja!');
    } else {
      let newExam = {
        naziv_kolokvijuma: data.value.name,
        grupe: []
      }
      this.subject.addExam(newExam)
      .subscribe(
        (res) => {
          console.log(res)
        }
      )
      // this.editModal.close();
      // this.toastr.success('Upsešno ste dodali kolokvijum!');
      // this.editForm.reset();
    }
  }

  setCurrentExam(data) {
    this.currentExam = data;
  }
}
