import React, { useEffect } from 'react';
import Chart from 'chart.js';

declare global {
  interface Window {
    myBar: any;
  }
}

const ChartLine = () => {
  useEffect(() => {
    const config: any = {
      type: 'line',
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
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: '#ff9800',
            borderColor: '#ff9800',
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Sales Charts',
          fontColor: 'white',
        },
        legend: {
          labels: {
            fontColor: 'black',
          },
          align: 'end',
          position: 'bottom',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: 'rgba(17,17,17,.7)',
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Month',
                fontColor: 'white',
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: 'rgba(33, 37, 41, 0.3)',
                zeroLineColor: 'rgba(0, 0, 0, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: 'rgba(17,17,17,.7)',
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: 'Value',
                fontColor: 'white',
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: 'rgba(17, 17, 17, 0.15)',
                zeroLineColor: 'rgba(33, 37, 41, 0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    const canvas: any = document.getElementById('line-chart') as HTMLCanvasElement;
    const ctx: any = canvas.getContext('2d');
    window.myBar = new Chart(ctx, config);
  }, []);

  return (
    <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4">
      <div className="bg-red-600 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-lg-orange">
        <h6 className="uppercase text-gray-200 text-xs font-medium">Overview</h6>
        <h2 className="text-white text-2xl">Sales value</h2>
      </div>
      <div className="p-4">
        <div className="relative h-96">
          <canvas id="line-chart" />
        </div>
      </div>
    </div>
  );
};

export default ChartLine;
