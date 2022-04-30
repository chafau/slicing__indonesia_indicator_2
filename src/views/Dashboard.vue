<template>
  <main id="Home-page">
    <div id="dashboard">
      <div class="container">
        <h3 class="jumbotron pt-4">Dashboard</h3>
        <div class="row">
          <div
            class="col-md col-xs-6 mt-4"
            v-for="item in Stats"
            :key="item.id"
          >
            <stats-card
              :title="item.title"
              :description="item.description"
              :colors="item.color"
            />
          </div>
        </div>
        <div class="row mt-4 mx-1 mx-md-0">
          <div class="col-md-7 col-xs-12 bg-white">
            <SplineChart />
          </div>
          <div
            class="
              col-md-4
              mt-3 mt-md-0
              col-xs-12
              mx-auto
              bg-white
              d-flex
              align-items-center
            "
          >
            <DonutChart />
          </div>
        </div>

        <div class="row bg-white mt-4 mx-2">
          <div class="col">
            <div id="chart">
              <apexchart
                type="donut"
                :options="donutSimpleOptions"
                :series="donutSimpleSeries"
              ></apexchart>
            </div>
          </div>
          <div class="col">
            <div id="chart">
              <apexchart
                type="donut"
                :options="donutSimpleOptions"
                :series="donutSimpleSeries"
              ></apexchart>
            </div>
          </div>
          <div class="col">
            <div id="chart">
              <apexchart
                type="donut"
                :options="donutSimpleOptions"
                :series="donutSimpleSeries"
              ></apexchart>
            </div>
          </div>
          <div class="col">
            <div id="chart">
              <apexchart
                type="donut"
                :options="donutSimpleOptions"
                :series="donutSimpleSeries"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import StatsCard from "../components/cards/StatsCard.vue";
import ApexCharts from "apexcharts";
import Cards from "../components/cards/Cards.vue";
import DonutChart from "../components/charts/DonutChart.vue";
import SplineChart from "../components/charts/SplineChart.vue";

export default {
  components: {
    StatsCard,
    ApexCharts,
    Cards,
    DonutChart,
    SplineChart,
  },
  data() {
    return {
      Stats: [
        {
          id: 1,
          title: "All Candidate",
          description: "120",
          color: "white",
        },

        {
          id: 2,
          title: "New Candidate",
          description: "40",
          color: "white",
        },
        {
          id: 3,
          title: "On Progress",
          description: "25",
          color: "white",
        },
        {
          id: 4,
          title: "Pending",
          description: "47",
          color: "white",
        },
        {
          id: 5,
          title: "Not Met",
          description: "15",
          color: "white",
        },
        {
          id: 6,
          title: "Completed",
          description: "92",
          color: "white",
        },
      ],

      //

      donutSimpleSeries: [50, 50],
      donutSimpleOptions: {
        labels: ["Transport"],
        chart: {
          type: "donut",
        },
        colors: ["#FFFFFF", "#3A408F"],
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "50%",
                  formatter: () => "Back End",
                },
              },
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 100,
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

<style lang="scss" scoped>
#dashboard {
  background: #f6f6f6;
  min-height: 100%;

  .container {
    .jumbotron {
      font-weight: $font-bold;
    }
  }
}
</style>