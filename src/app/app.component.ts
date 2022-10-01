import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Weather: any = <any>{};

  constructor(private weatherService: WeatherService){}
  ngOnInit(){
    
  }

  getWeather(CityName: String){
    this.weatherService.getWeather(CityName)
      .subscribe(
        res =>{
          console.log(res);
          this.Weather=res;
        },
        err =>console.log(err)
      )
  }

  submitLocation(CityName: HTMLInputElement){
    if(CityName.value){
      this.getWeather(CityName.value);
      CityName.value = '';
    }
    else{
      alert("Please, insert some values");
    }
    
    CityName.focus();

    return false;
  }

}
