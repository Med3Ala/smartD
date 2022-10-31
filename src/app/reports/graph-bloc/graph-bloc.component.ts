import { Component, OnInit } from '@angular/core';
import { energyData } from 'app/energyData';
import * as chartsData from '../../../app/shared/data/chartjs';

@Component({
  selector: 'app-graph-bloc',
  templateUrl: './graph-bloc.component.html',
  styleUrls: ['./graph-bloc.component.scss']
})
export class GraphBlocComponent implements OnInit {

  public data : any[] = []
  public date : any[] = []
  public volP : any[] = []
  public VolPhase1 :any[] = []
  public VolPhase2 :any[] = []
  public VolPhase3 :any[] = []
  public barData :any[] = []

  constructor() { }



  ngOnInit(): void {
    this.energyDataArray()
    this.DateDataArray()
    this.volPhases()


  this.barData = [
   { data : this.VolPhase1 , label:'Phase 1'},
   { data : this.VolPhase2 , label:'Pahse 2'},
   { data : this.VolPhase3 , label:'Phase 3'}
  ];

  }


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
