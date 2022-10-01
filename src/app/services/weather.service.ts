import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '22d30df4419fdd8fbffef78986dd098f';

  URI: String = '';

  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&q=`;
   }

   getWeather(CityName: String){
    return this.httpClient.get(`${this.URI}${CityName}`)
   }

}
