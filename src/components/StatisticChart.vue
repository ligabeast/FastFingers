<template>
  <LineChart :chartData="data" :options="chartOptions"></LineChart>
</template>

<script>
import { defineComponent } from "vue";
import { registerables, Chart } from "chart.js";
import { LineChart } from "vue-chart-3";

export default defineComponent({
  components: { LineChart },
  setup() {
    const wordsCompleted = ["'year'", "'car'", "'baran'", "'armin'", "'help'"];
    const incorrectCharacters = [3, 4, 1, 5, 6];
    const sectionWPM = [2, 24, 41, 65, 16];
    const continuousWPM = [32, 14, 61, 45, 16];
    const data = {
      labels: wordsCompleted,
      datasets: [
        {
          label: "Incorrect Characters",
          data: incorrectCharacters,
          pointBackgroundColor: "black",
          fill: false,
          showLine: false, //<- set this
          yAxisID: "y1",
          pointStyle: "crossRot",
          borderColor: "red",
          pointRadius: 5,
          borderWidth: 2,
        },
        {
          label: "Section WPM",
          data: sectionWPM,
          borderColor: "#494949",
          borderWidth: 3,
          pointRadius: 1,
          lineTension: 0.3,
        },
        {
          label: "Continuous WPM",
          data: continuousWPM,
          borderColor: "#2d9efb",
          borderWidth: 3,
          pointRadius: 1,
          lineTension: 0.3,
        },
      ],
    };

    const noData = {
      id: "noData",
      afterDatasetsDraw: (chart) => {
        const {
          ctx,
          data,
          chartArea: { top, left, width, height },
        } = chart;
        ctx.save();
        console.log("HELLO");
        if (data.datasets.length === 0) {
          console.log("HELLO");
          ctx.font = "bold 20px cagliostro";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.fillText(
            "Complete a test to see your WPM history",
            left + width / 2,
            top + height / 2
          );
        }
      },
    };

    Chart.register(...registerables, noData);

    const chartOptions = {
      title: {
        display: true,
        text: "Complete a test to see your WPM history",
      },
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            color: "#101010",
          },
          title: {
            display: true,
            text: "Word Number",
            font: {
              family: "cagliostro",
              size: 16,
            },
          },
          ticks: {
            callback: function (value, index) {
              return index + 1;
            },
            color: "#4a4a4a",
            font: {
              weight: "bolder",
              size: 14,
            },
            stepSize: 20,
            beginAtZero: true,
          },
        },
        y: {
          grid: {
            color: (ctx) => (ctx.tick.value == 0 ? "#101010" : "transparent"),
          },
          title: {
            display: true,
            text: "Words per Minute",
            font: {
              family: "cagliostro",
              size: 16,
            },
          },
          ticks: {
            color: "#4a4a4a",
            font: {
              size: 14,
              weight: "bolder",
            },
            stepSize: 20,
            beginAtZero: true,
          },
        },
        y1: {
          position: "right",

          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
          title: {
            display: true,
            text: "Incorrect Characters",
            font: {
              family: "cagliostro",
              size: 16,
            },
          },
          ticks: {
            color: "#4a4a4a",
            font: {
              size: 14,
              weight: "bolder",
            },
            stepSize: 20,
            beginAtZero: true,
          },
        },
      },
    };

    return {
      chartOptions,
      data,
    };
  },
});
</script>
