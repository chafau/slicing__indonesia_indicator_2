<template>
  <div id="chart d-flex align-items-center" style="margin: auto">
    <apexchart
      type="donut"
      width="380"
      :options="donutOptions"
      :series="donutSeries"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "DonutChart",
  data() {
    return {
      donutSeries: [35, 50, 15],
      donutOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        colors: ["#FF8988", "#3A408F", "#FFFFFF"],
        legend: {
          show: true,
        },
        title: {
          text: "Pie Chart",
        },
        responsive: [
          {
            breakpoint: 480,
            legend: {
              show: false,
            },
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
</style>