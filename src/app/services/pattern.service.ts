import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PatternService {

  constructor(
    public http:HttpClient    
  ) { }
  
  httpOptions:any = {
    headers: new HttpHeaders({ 
      'Content-Type': 'text/xml' 
    }),
    responseType:'text'
  };

  loadXML(url) {  
    return this.http.get(url,this.httpOptions); 
  }
  get(url)
  {
    return this.http.get(url);
  }
  

}
