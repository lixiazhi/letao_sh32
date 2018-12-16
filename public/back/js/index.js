$(function () {
    var echart_left = echarts.init(document.querySelector('.echart_left'));
    var echart_right = echarts.init(document.querySelector('.echart_right'));
    // 指定图表的配置项和数据
    var option1 = {
        // 大标题
        title: {
            // 标题文本
            text: '2018年注册人数'
        },
        // 悬停文本
        tooltip: {},
        // 图例
        legend: {
            left: 'right',
            data: ['人数', '销量']
        },
        xAxis: {
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar', //bar柱状图  line折线图  pie饼图
            data: [500, 200, 360, 100, 100, 200]
        }, {
            name: '销量',
            type: 'bar',
            data: [400, 120, 236, 310, 410, 220]
        }]
    };
    echart_left.setOption(option1);
    var option2 = {
        title: {
            text: '热门品牌访问量',
            subtext: '2017年6月',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['耐克', '阿迪', '阿迪王', '特步', '老北京']
        },
        series: [{
            name: '品牌',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{
                    value: 335,
                    name: '耐克'
                },
                {
                    value: 310,
                    name: '阿迪'
                },
                {
                    value: 234,
                    name: '阿迪王'
                },
                {
                    value: 135,
                    name: '特步'
                },
                {
                    value: 1548,
                    name: '老北京'
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    echart_right.setOption(option2);
})