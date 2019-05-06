import { Component, OnInit, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  
  public chart: [];
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    let canvasRef = this.elementRef.nativeElement.querySelector(`#canvas`);
    this.chart = new Chart(canvasRef, {
      type: 'bar',
      data: {
          labels: ['Prva', 'Druga', 'Treća'],
          datasets: [{
              label: 'Dolaznost',
              data: [12, 19, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      },
      layout: {
        padding: {
            left: 50,
            right: 10,
            top: 10,
            bottom: 0
        }
    }
    })
  }

}
