import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-room-selection',
  templateUrl: './room-selection.component.html',
  styleUrl: './room-selection.component.scss'
})
export class RoomSelectionComponent {
  roomListObj = [
    {
      name: "1",
      style: ""
    },
    {
      name: "1.5",
      style: ""
    },
    {
      name: "2",
      style: ""
    },
    {
      name: "2.5",
      style: ""
    },
    {
      name: "3",
      style: ""
    },
    {
      name: "3.5",
      style: ""
    },
    {
      name: "4",
      style: ""
    },
    {
      name: "4.5",
      style: ""
    },
    {
      name: "5",
      style: ""
    },
    {
      name: "5.5",
      style: ""
    },
    {
      name: "+6",
      style: ""
    },
  ]
selected1: number | undefined
selected2: number | undefined

selectRoom(id:number){
  
  if(this.roomListObj[id].style == "selected-right" || 
      this.roomListObj[id].style == "selected-left" || 
      this.roomListObj[id].style == "selceted-base"
    )
    this.deselectAllRooms()
  else if(this.selected1 === undefined){
    this.selected1 = id
    this.roomListObj[id].style = "selceted-base"
  }
  else if(this.selected2 === undefined){
    this.selected2 = id
    this.fancySelection()
  }
  else{
    this.deselectAllRooms()
    this.selected1 = id
    this.roomListObj[id].style = "selceted-base"
  }
}

deselectAllRooms(){
  this.roomListObj.forEach(r => r.style = "")
  this.selected1 = undefined
  this.selected2 = undefined
}

fancySelection(){
  // this.deselectAllRooms()
  if(this.selected1 === undefined || this.selected2 === undefined) return;
  const [start , end] = this.selected1 < this.selected2 ? [this.selected1 , this.selected2] : [this.selected2 , this.selected1]

  for(let i = start+1;i < end;i++){
    this.roomListObj[i].style = "selected-mid"
  }
  this.roomListObj[start].style = "selected-right"
  this.roomListObj[end].style = "selected-left"
}
}
