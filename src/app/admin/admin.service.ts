import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { environment } from 'environments/environment';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

    url = environment.apiUrl + 'user/';
    users : User[];

  constructor(private http : HttpClient,
    private authService : AuthService) { }

    addUser(data){
        let params = {
            login: data.login,
            password: data.password,
            name : data.name,
            customer : this.authService.userData.value.result.currentUser.customer
        }
        return this.http.post(this.url+'add', params);
    }

    getUsers(){
        return this.http.post(this.url+'customer',{"skip":0,"limit":100,"customer":this.authService.userData.value.result.currentUser.customer});
    }
}
