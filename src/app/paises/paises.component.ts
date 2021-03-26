import { CdkDragDrop , moveItemInArray} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises:any=[];
  constructor(private http:HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(respaises=>{
      this.paises=respaises;
    })
  }

  ngOnInit(): void {
  }

  drop(evento:CdkDragDrop<any>){
    console.log('ok', evento);
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }

}

//https://material.angular.io/cdk/scrolling/overview

//https://material.angular.io/cdk/drag-drop/overview
