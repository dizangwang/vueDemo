<template>
  <div class="hello">
    <div id="echart1" style="width: 1000px; height: 500px"></div>
    <div id="echart2" style="width: 1000px; height: 500px"></div>
    <div id="echart3" style="width: 1000px; height: 500px"></div>
    <div id="echart4" style="width: 1000px; height: 500px"></div>
    <div id="echart5" style="width: 1000px; height: 500px"></div>
    <div id="echart6" style="width: 1000px; height: 500px"></div>
  </div>
</template>

<script>
/*global echarts:true*/
export default {
  name: "Echarts",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let myChart1 = echarts.init(document.getElementById("echart1"));
      myChart1.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });

      let myChart6 = echarts.init(document.getElementById("echart6"));
      myChart6.setOption({
        series: [
          {
            type: "gauge",
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: "80%",
            axisLine: {
              lineStyle: {
                color: [[1, "#f00"]],
                width: 3,
              },
            },
            splitLine: {
              distance: -18,
              length: 18,
              lineStyle: {
                color: "#f00",
              },
            },
            axisTick: {
              distance: -12,
              length: 10,
              lineStyle: {
                color: "#f00",
              },
            },
            axisLabel: {
              distance: -50,
              color: "#f00",
              fontSize: 25,
            },
            anchor: {
              show: true,
              size: 20,
              itemStyle: {
                borderColor: "#000",
                borderWidth: 2,
              },
            },
            pointer: {
              offsetCenter: [0, "10%"],
              icon:
                "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "115%",
              itemStyle: {
                color: "#000",
              },
            },
            detail: {
              valueAnimation: true,
              precision: 1,
            },
            title: {
              offsetCenter: [0, "-50%"],
            },
            data: [
              {
                value: 58.46,
                name: "PLP低压计",
              },
            ],
          },
          {
            type: "gauge",
            min: 0,
            max: 60,
            splitNumber: 6,
            axisLine: {
              lineStyle: {
                color: [[1, "#000"]],
                width: 3,
              },
            },
            splitLine: {
              distance: -3,
              length: 18,
              lineStyle: {
                color: "#000",
              },
            },
            axisTick: {
              distance: 0,
              length: 10,
              lineStyle: {
                color: "#000",
              },
            },
            axisLabel: {
              distance: 10,
              fontSize: 25,
              color: "#000",
            },
            pointer: {
              show: false,
            },
            title: {
              show: false,
            },
            anchor: {
              show: true,
              size: 14,
              itemStyle: {
                color: "#000",
              },
            },
          },
        ],
      });

      let myChart5 = echarts.init(document.getElementById("echart5"));
      myChart5.setOption({
        title: {
          text: "漏斗图",
          subtext: "纯属虚构",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        legend: {
          data: ["展现", "点击", "访问", "咨询", "订单"],
        },

        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "10%",
            top: 60,
            //x2: 80,
            bottom: 60,
            width: "80%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: [
              { value: 60, name: "访问" },
              { value: 40, name: "咨询" },
              { value: 20, name: "订单" },
              { value: 80, name: "点击" },
              { value: 100, name: "展现" },
            ],
          },
        ],
      });

      let myChart4 = echarts.init(document.getElementById("echart4"));
      myChart4.setOption({
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
          },
        ],
      });

      let myChart3 = echarts.init(document.getElementById("echart3"));
      myChart3.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["蒸发量", "降水量", "平均温度"],
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "水量",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml",
            },
          },
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3,
            ],
          },
          {
            name: "降水量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3,
            ],
          },
          {
            name: "平均温度",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2,
            ],
          },
        ],
      });

      let myChart2 = echarts.init(document.getElementById("echart2"));
      myChart2.setOption({
        title: {
          text: "堆叠区域图",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: 0 auto;
}
</style>
