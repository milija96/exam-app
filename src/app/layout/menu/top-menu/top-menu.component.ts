import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ISubjects } from 'src/app/models/models';
import { Subject, ReplaySubject } from 'rxjs';
import { SubjectService } from 'src/app/services/subject.service';
=======
>>>>>>> c2794f9dcc36da8482b89e757b8ab20d3108a4f1

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
<<<<<<< HEAD
  availableSubjects: Array<ISubjects> = [
    {id: 1,  name: 'Softversko inzenjerstvo'},
    {id: 2,  name: 'Internet programiranje'}]
  currentSubject: Subject<ISubjects> = new ReplaySubject(null)
  selected: any;
  constructor(public subject: SubjectService) {
     this.currentSubject.subscribe(
    (res) => {
      this.selected = res;
      this.subject.currentSubject$.next(res)

    }
  )}

  ngOnInit() {
    this.currentSubject.next({id: 1, name: 'Softversko inženjerstvo'});
  }

  subjectChange(sub: any) {
    this.currentSubject.next(sub);
    this.subject.currentSubject$.next(sub)
=======

  constructor() { }

  ngOnInit() {
>>>>>>> c2794f9dcc36da8482b89e757b8ab20d3108a4f1
  }

}
