import React, { useEffect } from 'react';
import Chart from 'chart.js';

declare global {
  interface Window {
    myBar: any;
  }
}

const ChartBar = () => {
  useEffect(() => {
    const config: any = {
      type: 'bar',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: '#03a9f4',
            borderColor: '#03a9f4',
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: '#f44336',
            borderColor: '#f44336',
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: 'rgba(17,17,17,.7)',
          },
          align: 'end',
          position: 'bottom',
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.2)',
                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    const canvas: any = document.getElementById('bar-chart') as HTMLCanvasElement;
    const ctx: any = canvas.getContext('2d');
    window.myBar = new Chart(ctx, config);
  }, []);

  return (
    <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
      <div className="bg-blue-600 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-lg-orange">
        <h6 className="uppercase text-gray-200 text-xs font-medium">Overview</h6>
        <h2 className="text-white text-2xl">Sales value</h2>
      </div>
      <div className="p-4">
        <div className="relative h-96">
          <canvas id="bar-chart" />
        </div>
      </div>
    </div>
  );
};

export default ChartBar;