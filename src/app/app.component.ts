import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'https://reqres.in/api/users';
  Modeldata: string;
  display: boolean;
  data;
  constructor(private http:HttpClient){
    this.getDetails();
   const refresh = setInterval(()=>{
    this.getDetails();
   },10000);
  }
  getDetails(){
      this.http.get(this.title).subscribe(
        res => { //qres.in/api/users Success
           this.data = res['data']
        console.log(res['data']);
        }
      );
  }
  RowData(row) {
    this.Modeldata = JSON.stringify(row);
    this.display = true;
  }
}
