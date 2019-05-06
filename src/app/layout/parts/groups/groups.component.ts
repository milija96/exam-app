import { Component, OnInit, AfterContentInit, TemplateRef } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { IGroups } from 'src/app/models/models';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ApiService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit, AfterContentInit {
  public groups: Array<IGroups> = [];
  selectedGroup: any = new IGroups();
  groups$: Subject<any>;
  constructor(public ngxSmartModalService: NgxSmartModalService,
              public api: ApiService) {
    // this.groups$.next(this.groups)
  }

  ngOnInit() {
    this.api.getGroups()
    .subscribe(
      (res) => {
        for(let i = 0; i < res.length; i++) {
          res[i].id = res[i].id_grupe;
          res[i].name = res[i].naziv;
          res[i].date = res[i].datum;
          res[i].capacity = res[i].kapacitet;
          delete res[i].id_grupe;
          delete res[i].naziv;
          delete res[i].datum;
          delete res[i].kapacitet;
        }
        this.groups = res;
      }
    )
  }

  ngAfterContentInit() {
  }

  setCurrentGroup(data: any) {
    this.selectedGroup = data;
  }

  addGroup(data) {
    data.value.naziv = data.value.name;
    data.value.datum = data.value.date;
    data.value.kapacitet = data.value.capacity;
    let test =     {
      "id_grupe": 5,
      "naziv": "Grupa 5",
      "datum": "2019-04-14T20:52:06.000+0000",
      "kapacitet": 50
  }
    this.api.postGroup(test)
    .subscribe(
      (res) => {
        console.log(res)
      }
    )
  }
  editGroup(data: any) {
    console.log(data)
  }

  deleteGroup(data: any) {
    this.api.deleteGroup(this.selectedGroup.id)
    .subscribe((res) => {
      console.log(res)
    })
  }
}