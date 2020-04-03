import { Component, OnInit, Input } from '@angular/core';

// Esto tenemos que importarlo
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // Declaramos los parámetros que vamos a graficar
  // los labels, data y el título los va a recibir del padre, por eso tienen el @input
  @Input('labels') public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];

  @Input('titulo') leyenda = 'Leyenda';

  // Esta no va a cambiar, porque es como le decimos qué tipo de grafico es
  public doughnutChartType: ChartType = 'doughnut';


  constructor() { }

  ngOnInit() {
  }

}
