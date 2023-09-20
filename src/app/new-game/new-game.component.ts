import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  foglalasForm!: FormGroup;

  datum = new Date();
letszamok: number[] = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

kategoriak: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private api: ApiService,
    private router: Router

  ) { }


  ngOnInit(): void {
    this.foglalasForm = this.fb.group({
      nev: new FormControl('', Validators.required),
      iranyitoszam: new FormControl('', Validators.required),
      cim: new FormControl('', Validators.required),
      datum: new FormControl(new Date(), Validators.required),
      letszam: new FormControl('', Validators.required),
      kategoria: new FormControl('', Validators.required)
    })
    this.getKategoriak();  

  }

  

  addNew(){
    this.api.postUjFoglalas(this.foglalasForm.value).subscribe(res=>{
      alert('Új foglalás rögzítve!');
      this.router.navigate(['/games']);
      console.log(this.foglalasForm.value);
      
    }, error =>{
      alert('Valami nem stimmel.')
    }) 

  }
  getKategoriak(){
    this.api.getKat().subscribe(res=>{
      this.kategoriak =res;
        })
  }

}
