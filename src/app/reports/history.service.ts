import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map, skip } from 'rxjs/operators';
import { HistoryOfDevice } from './graph-bloc/HistoryOfDevice.interface';
import { DataEntity, result, Statistics } from 'app/models/history';
import { id } from '@swimlane/ngx-datatable';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';
import { value } from 'app/shared/data/dropdowns';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  server = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  // getHistory(id, limit, skip){
  //   return this.http.post(`${this.server}statistics/getVariableHistoryOfDevice`,{
  //     device_serial_number : id,
  //     limit : limit,
  //     skip : skip
  //   })
  // }

  getAllHistory(id, limit, skip, param):Observable<result[]>{
    return this.http.post<any>(`${this.server}statistics/getVariableHistoryOfDevice`,{
      device_serial_number : id,
      limit : limit,
      skip : skip
    }).pipe(
      map((value:Statistics)=>value.data),
      map(value=>{
        return value.map((val:DataEntity)=> {return {
          value : val[param],
          date : new Date(val.creating_date)
        }})
      })
      )
    }



    getAllHistoryByInterval(id, start_date, end_date , param ):Observable<result[]>{
      return this.http.post<any>(`${this.server}statistics/getVariableHistoryOfDeviceByInterval`,{
        device_serial_number : id,
        start_date : start_date,
        end_date : end_date
      })
      .pipe(
        map((value:Statistics)=>value.data),
        map(value=>{
          return value.map((val:DataEntity)=> {return {
            value : val[param],
            date : new Date(val.creating_date)
          }})
        })
        )
     }



   }





//     export interface Statistics {
//       code: string;
//       message: string;
//       success: boolean;
//       data?: (DataEntity)[] | null;
//     }
//     export interface DataEntity {
//       _id: string;
//       device_serial_number: string;
//       creating_date: string;
//       devType: string;
//       is_single_phase: boolean;
//       line_voltage?: (number)[] | null;
//       phase_voltage?: (number)[] | null;
//       current?: (number)[] | null;
//       apparent_power?: (number)[] | null;
//       active_power?: (number)[] | null;
//       reactive_power?: (number)[] | null;
//       power_factor?: (number)[] | null;
//       frequency?: (number)[] | null;
//       temperature: number;
//       storage_date: string;
//       __v: number;
//     }

//     export interface result {
//       value : any;
//       date : Date
//     }

// export function json2array(json){
//     var result = [];
//     var keys = Object.keys(json);
//     keys.forEach(function(key){
//         result.push(json[key]);
//     });
//     return result;
//   }





