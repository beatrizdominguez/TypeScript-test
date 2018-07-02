import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Influencer} from '../model/influencer.model';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  constructor(private http: HttpClient) { }
 // baseUrl: string = 'http://localhost:8080/user-portal/users';
  baseUrl = 'assets/sampledata/';

  getAll() {
    console.log('GETTING DATA ON SERVICE');
    return this.http.get<Influencer[]>(this.baseUrl + 'influencers_list.json').toPromise();
  }

  getById(id: number) {
   // return this.http.get<Influencer>(this.baseUrl + '/' + id);
   return this.http.get<Influencer>(this.baseUrl + 'influencer.json').toPromise();
  }

  addInfuencer(influencer: Influencer) {
    console.log('INFLUENCER ADDED');
    console.log('NAME :: ' + influencer.name);
    // return this.http.post(this.baseUrl, user);

 // return  this.http.post(`${this.baseUrl}/add`, influencer).subscribe(res => console.log('Done'));
  }

  updateInfluencer(influencer: Influencer) {
    // return this.http.put(this.baseUrl + '/' + user.id, user);
    console.log('THE INFLUENCER WITH ID ' + influencer.id + ' was sent to update');
   //return null;
  }

  deleteInfluencer(id: number) {
    console.log('THE INFLUENCER WITH ID ' + id + ' was deleted');
    // return this.http.delete(this.baseUrl + '/' + id);
   return id;
  }
}
