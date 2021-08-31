import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  astronautBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(newName: string, checked: boolean)
  {
    let index = 0
    for (; index < this.crew.length; index++) {
      if(this.crew[index]['name'] === newName)
        break;
    }
    if (index===this.crew.length)
      this.crew.push({name: newName,firstMission: checked})
  }

  remove(removeMe: object)
  {
    let index = this.crew.indexOf(removeMe);
    if (index !== -1)
      this.crew.splice(index,1);
  }

  edit(astronaut: object) {
    this.astronautBeingEdited = astronaut;
 }

  save(newName: string, astronaut: object)
  {
    astronaut['name'] = newName;
    this.astronautBeingEdited = null;
  }

}
