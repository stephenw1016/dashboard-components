import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import * as chroma from 'chroma-js';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export default class ChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('chartContainer') chartContainer: ElementRef;
  @Input('data') data: Object;

  private svg: any;
  private chartClass: String;

  ngOnChanges (changes: SimpleChanges) {
    if (changes.data && !changes.data.isFirstChange()) {
      this.renderChart(changes.data.currentValue);
    }
  }

  ngAfterViewInit() {
    this.chartClass = this.chartContainer.nativeElement.className;
    let height = 300;
    let width = 300;
    let marginLeft = height / 2;
    let marginTop = width / 2;
    let selection = d3.select(`.${this.chartClass}`);

    this.svg = selection.append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`);
  }

  renderChart (data: Array<any>) {
    const duration = 500;

    let color = d3.scaleOrdinal<number, string>()
      .domain(data)
      .range(chroma.scale('YlGnBu').colors(data.length));

    let arcTween = d3.arc()
      .outerRadius(90)
      .innerRadius(70);

    let pieFn = d3.pie()
      .sort((a: any, b: any) => a.values.length - b.values.length)
      .value((d: any) => d.values.length);

    let path = this.svg.selectAll('path')
      .data(pieFn(data), (d: any) => d.data.key);

    path.enter().append('path')
      .style('fill', (d: any, i: any) => color(i))
      .style('fill-opacity', 0.8)
      .transition()
      .duration(duration)
      .attr('d', arcTween);

    path.exit().remove();

    path.transition()
      .duration(duration)
      .attr('d', arcTween);
  }

}


