import { Component, OnInit } from '@angular/core';
import { energyData } from 'app/energyData';
import { dateBeforeMins } from 'app/shared/utils/dates';
import { forkJoin, Observable } from 'rxjs';
import * as chartsData from '../../../app/shared/data/chartjs';
import { HistoryService } from '../history.service';
import {HistoryOfDevice} from './HistoryOfDevice.interface';


@Component({
  selector: 'app-graph-bloc',
  templateUrl: './graph-bloc.component.html',
  styleUrls: ['./graph-bloc.component.scss']
})
export class GraphBlocComponent implements OnInit {

  public data : any[] = []
  public date : any[] = []
  // public volP : any[] = []
  public VolPhase1 :any[] = []
  public VolPhase2 :any[] = []
  public VolPhase3 :any[] = []
  public barData :any[] = []


  public VolP : any[] = []
  // Vol_P: any = []
  Vol_P:HistoryOfDevice[]=[]

  private getHistory$!: Observable<HistoryOfDevice[]>

  constructor(
    private historyService:HistoryService
  ) { }



  ngOnInit(): void {

    //this.getHistory()
    this.getHistoryByInterval()

    this.historyService.getboth('865334041071942',
    dateBeforeMins(new Date(), 60*24*20),
    new Date())
    // this.getEnergyByInterval()
    // this.energyDataArray()
    // this.DateDataArray()


  this.barData = [
   { data : this.VolPhase1 , label:'Phase 1'},
   { data : this.VolPhase2 , label:'Pahse 2'},
   { data : this.VolPhase3 , label:'Phase 3'}
  ];

  }

  // getHistory(){
  //   this.historyService.getHistory('865334041071942', 100 ,0).subscribe(response=>{
  //     console.log(response)
  //   })
  // }


  getHistory(){



    this.historyService.getAllHistory('865334041071942', 10, 0, 'phase_voltage').subscribe(data => {
      data.forEach((elem, index)=>{
        this.data.push(elem.value)
        this.date.push(
          elem.date.toLocaleDateString()
        )
      })
      this.volPhases()
    })
  }


  getHistoryByInterval(){
    this.historyService.getAllHistoryByInterval('865334041071942',
    dateBeforeMins(new Date(), 60*24*20),
    new Date(),
    'phase_voltage').subscribe(data=>{
      data.forEach((elem, index)=>{
        this.data.push(elem.value)
        this.date.push(
          elem.date.toLocaleDateString()
        )
      })
      this.volPhases()
    })
  }



  // getStatisticsByInterval(){
  //   this.historyService.getAllHistoryByInterval('865334041071942',
  //   dateBeforeMins(new Date(), 60*24*14),
  //   new Date(),
  //   'phase_voltage').pipe(
  //     forkJoin(value => this )
  //   )

  // }



  // getEnergyByInterval(){
  //   this.historyService.getAllEnergyByInterval('865334041071942',
  //    dateBeforeMins(new Date(), 60*24*14),
  //   new Date(),
  //   'active_energy').subscribe(res => console.log(res))
  // }








  energyDataArray(){
    for(let i = 0; i<energyData.length;i++){
      if(energyData[i].datatype == "variable")
      this.data.push(energyData[i].message.volP.split('/'));

    }
    console.log(this.data);

  }

  volPhases(){
    for (let i=0; i<this.data.length ; i++){
      this.VolPhase1.push(this.data[i][0])
      this.VolPhase2.push(this.data[i][1])
      this.VolPhase3.push(this.data[i][2])

    }
    console.log(this.VolPhase1);
    console.log(this.VolPhase2);
    console.log(this.VolPhase3);
  }


  DateDataArray(){
    for(let i = 0; i<energyData.length;i++){
      if(energyData[i].datatype == "variable")
      this.date.push(energyData[i].Date);
    }
    console.log(this.date);

  }


  public barChartOptions = chartsData.barChartOptions;
  public barChartColors = chartsData.barChartColors;
  public barChartLegend = chartsData.barChartLegend;
  public barChartType = chartsData.barChartType;

  public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  }



}
