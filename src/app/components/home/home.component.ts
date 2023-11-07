import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  chartOptions = {
    animationEnabled: true,
    theme: "dark2",
    title: {
      text: "$2000",
      verticalAlign: "center",
      horizontalAlign: "center",
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "bold",
    },
   
    backgroundColor: "#0f172a", 

    data: [
      {
        type: 'doughnut',
        // yValueFormatString: "#,###.##'%'",
        dataPoints: [
          { y: 90, color: "#0f172a" }, // Black color for the third data point
          { y: 39, color: "#008000" }, // Green color for the first data point
          { y: 33, color: "#FFFF00" }, // Yellow color for the second data point
        ],
      },
    ],
  };
}
