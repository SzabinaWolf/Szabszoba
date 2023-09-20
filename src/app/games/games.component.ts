import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Foglalas } from '../model';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nev', 'iranyitoszam', 'cim', 'datum', 'letszam', 'kategoria'];
  public dataSource! : MatTableDataSource<Foglalas>;
foglalasok! : Foglalas[];

kategoria: any;

constructor(
private api: ApiService,
private http: HttpClient
){}

ngOnInit(): void {
  this.showAll();
}


showAll(){
  this.api.getAllFoglalas().subscribe(res=>{
    this.foglalasok = res;
    this.dataSource = new MatTableDataSource(this.foglalasok);
    console.log(this.foglalasok);
  },
  error=>{
    alert('Valami nem stimmel');
  }
  )
}


}
