import { Component, OnInit } from '@angular/core';
import { energyData } from 'app/energyData';
import * as chartsData from '../../app/shared/data/chartjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  public data : any[] = []
  public date : any[] = []
  public volP : any[] = []
  public VolPhase1 :any[] = []
  public VolPhase2 :any[] = []
  public VolPhase3 :any[] = []

  public barData :any[] = [
    // { data : this.VolPhase1 , label:'Phase 1'},
    // { data : this.VolPhase2 , label:'Pahse 2'},
    // { data : this.VolPhase3 , label:'Phase 3'}
  ]

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
        console.log(this.barData);
  }


  energyDataArray(){
    for(let i = 0; i<energyData.length;i++){
      if(energyData[i].datatype == "variable")
      this.data.push(energyData[i].message.volP.split('/'));

    }
    console.log(this.data);

  }

// volpData(){
//   for (let i=0; i<this.data.length ; i++){
//     this.volP.push((this.data[i]).reduce((a,b)=>
//     a+parseFloat(b)
//     ,0
//     )/this.data[i].length);
//   }
//   console.log(this.volP);

// }

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
