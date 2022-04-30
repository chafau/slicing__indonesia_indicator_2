<template>
  <div id="chart">
    <apexchart
      class="d-flex align-items-center"
      type="area"
      height="350"
      :options="chartOptions"
      :series="chartSeries"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "SplineChart",
  data() {
    return {
      chartSeries: [
        {
          name: "New Candidate",
          data: [10, 28, 35, 30, 45, 23, 35, 47, 30, 40, 27, 32, 42, 20],
        },
        {
          name: "On Progress",
          data: [12, 18, 20, 40, 19, 20, 24, 22, 25, 34, 23, 30, 53, 10],
        },
        {
          name: "On Progress",
          data: [0],
        },
        {
          name: "On Progress",
          data: [0],
        },
      ],
      chartOptions: {
        title: {
          text: "Candidate Overview",
        },
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
          },
        },
        colors: ["#3A408F", "#FF7171", "#FF922B", "#3476F2"],
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
        xaxis: {
          type: "category",
          categories: [
            "17 Mar",
            "18 Mar",
            "19 Mar",
            "20 Mar",
            "21 Mar",
            "22 Mar",
            "23 Mar",
            "24 Mar",
            "25 Mar",
            "26 Mar",
            "27 Mar",
            "28 Mar",
            "29 Mar",
            "30 Mar",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  },
};
</script>