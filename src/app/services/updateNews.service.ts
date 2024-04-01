import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateNewsService {
updatableNewsKey:string=""
constructor() { }
setNewsKey(key:string){
this.updatableNewsKey=key
}
getNewsKey(){
  return this.updatableNewsKey
}
removeNewsKey(){
  this.updatableNewsKey=""
}
}
