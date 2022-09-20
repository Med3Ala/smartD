import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { environment } from 'environments/environment';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

    usersUrl = environment.apiUrl + 'user/';
    deviceUrl = environment.apiUrl + 'device/';
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
        return this.http.post(this.usersUrl+'add', params);
    }

    getUsers(){
        return this.http.post(this.usersUrl+'customer',{"skip":0,"limit":100,"customer":this.authService.userData.value.result.currentUser.customer});
    }

    getDevices(){
        return this.http.post(this.deviceUrl+'list',{"skip":0,"limit":100});
    }

    addDevice(data){
        let params = {
            name: data.name,
            type: data.type,
            communication_type : data.communication_type,
            hasMaster : data.hasMaster,
            slaveNbr : data.slaveNbr,
        }
        return this.http.post(this.deviceUrl+'add', params);
    }
}
