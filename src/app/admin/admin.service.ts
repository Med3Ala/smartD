import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

    url = environment.apiUrl + 'user/';

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
}
