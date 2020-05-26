import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/fetch.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  resData;
  moviesData;
  rate : number;

  constructor(private nas:FetchService) { }

  ngOnInit() {

     this.nas.getMovie()
    // this.http.get(url)
    .subscribe((res)=>
      {
        console.log(res);
        this.resData=res;
        if(this.resData.status=="ok"){
          this.moviesData=this.resData.articles;
          console.log(this.moviesData)
        }
   
      })
    }

        postData(movieId){
     console.log(movieId);
     //  console.log(this.rate);
    // this.psData = new posData();
    // this.psData.id = movieId;
      this.nas.addRate(movieId,this.rate)
      .subscribe(rat=>
        //console.log(this.resultData.id);
       // console.log(this.resultData.value);
       console.log("rating added"));

    }
      deleteRate(movieId) {
    console.log(movieId)

    this.nas.deleteRatee(movieId)
  .subscribe();
  }
}
  
