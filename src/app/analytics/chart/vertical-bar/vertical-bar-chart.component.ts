import {
  AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

import * as chroma from 'chroma-js';

import * as d3 from 'd3';

@Component({
  selector: 'sw-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Native
})
export default class VerticalBarChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('chartContainer') chartContainer: ElementRef;
  @Input('data') data: Object;

  private svg: any;
  private margin = { top: 20, left: 40, right: 20, bottom: 30 };
  private width = 500 - this.margin.left - this.margin.right;
  private height = 300 - this.margin.top - this.margin.bottom;

  ngOnChanges (changes: SimpleChanges) {
    if (changes.data && !changes.data.isFirstChange()) {
      console.log(changes.data.currentValue);
      this.renderChart(changes.data.currentValue);
    }
  }

  ngAfterViewInit() {
    let selection = d3.select(this.chartContainer.nativeElement);

    this.svg = selection.append('svg')
      // .attr('width', this.width)
      // .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
  }

  renderChart (data: Array<any>) {

    let y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.values.length)])
      .rangeRound([this.height, 0]);

    let x = d3.scaleBand()
      .domain(data.map(d => d.key))
      .range([0, this.width])
      .padding(0.3);

    this.svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisBottom(x));

    this.svg.append('g')
      .attr('class', 'axis axis-y')
      .call(d3.axisLeft(y).ticks(5))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Total');

    let rect = this.svg.selectAll('rect')
      .data(data, (d: any) => d.key);

    rect.enter().append('rect')
      .style('fill', (d: any) => '#fff')
      .transition()
      .attr('width', x.bandwidth())
      .attr('height', (d: any) => this.height - y(d.values.length))
      .attr('x', (d: any) => x(d.key))
      .attr('y', (d: any) => y(d.values.length));

    this.svg.selectAll('rect').on('click', (d: any) => console.log(d));

    rect.exit().remove();
  }

}


