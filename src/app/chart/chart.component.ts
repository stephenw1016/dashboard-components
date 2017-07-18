import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import * as chroma from 'chroma-js';

@Component({
  selector: 'saw-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export default class ChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('chartContainer') chartContainer: ElementRef;
  @Input('data') data: Object;

  private chartClass: String;

  ngOnChanges (changes: SimpleChanges) {
    if (changes.data && !changes.data.isFirstChange()) {
      this.renderChart(changes.data.currentValue);
    }
  }

  ngAfterViewInit() {
    this.chartClass = this.chartContainer.nativeElement.className;
  }

  renderChart (data: Array<any>) {
    let selection = d3.select(`.${this.chartClass}`);
    let height = 300;
    let width = 300;
    let marginLeft = height / 2;
    let marginTop = width / 2;

    let color = d3.scaleOrdinal<number, string>()
      .range(d3.schemeCategory20b);

    let arc = d3.arc()
      .outerRadius(90)
      .innerRadius(70);

    let pie = d3.pie()
      .sort(null)
      .value((d: any) => d.values.length);

    let svg = selection.append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`);

    let g = svg.selectAll('.arc')
      .data(pie(data))
      .enter();

    g.append('path')
      .attr('d', <any>arc)
      .style('fill', (d: any, i: any) => color(i));
  }

}
