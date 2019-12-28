import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiUrl = 'https://reqres.in/api/users';
  
  display: boolean;
  data:[];
  selectedRow: any;
  constructor(private http: HttpClient) {
    this.getDetails();
    setInterval(() => {
      this.getDetails();
    }, 10000);
  }
  getDetails() {
    this.http.get(this.apiUrl).subscribe(
      res => { //qres.in/api/users Success
        this.data = res['data']
        console.log(res['data']);
      }
    );
  }
  selectRow(row) {
    this.selectedRow = row;
    this.display = true;
  }
}
