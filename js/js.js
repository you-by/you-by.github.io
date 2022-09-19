 $(window).load(function(){  
             $(".loading").fadeOut()
            })  
			
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});


 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {

echarts_3()
echarts_4()
bt01()
bt02()
bt03()
bt04()

function echarts_4() {
 var myChart = echarts.init(document.getElementById('echart4'));
option1= {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
};



        myChart.setOption(option1);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
	$(".sebtn a").click(function(){
$(this).addClass("active").siblings().removeClass("active")
})
$(".sebtn a").eq(0).click(function(){
	 myChart.setOption(option1);
})
$(".sebtn a").eq(1).click(function(){
	 myChart.setOption(option2);
})
$(".sebtn a").eq(2).click(function(){
	 myChart.setOption(option3);
})
	
    }
// 分类汇总
function echarts_3() {
 var myChart = echarts.init(document.getElementById('echart3'));
var spNum = 5,_max=100;
var legendData = ['频次'];
var y_data = ['就业', '教育', '交通', '城建'];

  var data1 = [347,116,313,905];
  var data2 = [];
  
var fomatter_fn = function(v) {
    return (v.value / _max * 100).toFixed(0) 
}
var _label = {
    normal: {
        show: true,
        position: 'inside',
        formatter: fomatter_fn,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    }
};
option = {

    grid: {
        containLabel: true,
        top: 10,
        left: 0,
        right: 15,
        bottom:-10
    },
    tooltip: {
        show: true,
        formatter:'{b}<br/>{a}:{c}'
    },
    xAxis: {
        splitNumber: spNum,
       // interval: _max / spNum,
        //max: _max,
        axisLabel: {
            show: false,
            formatter: function(v) {
                var _v = (v / _max * 100).toFixed(0);
                return _v == 0 ? _v : _v + '%';
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }

    },
    yAxis: [{
        data: y_data,
        axisLabel: {
            fontSize: 14,
            color: 'rgba(255,255,255,.6)'

        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }, {
        show: false,
        data: y_data,
        axisLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        name: '求助',
        stack: '2',
        label: _label,
        legendHoverLink: false, barWidth: '50%',
        itemStyle: {
            normal: {
                color: '#ffb3b3'
            },
            emphasis: {
                color: '#ffffcc'
            }
        },
        data: data1
    }, {
        type: 'bar',
        name: '其他',
        stack: '2',
        legendHoverLink: false, barWidth: '50%',
        label: _label,
        itemStyle: {
            normal: {
                color: '#ea7231'
            },
            emphasis: {
                color: '#ea7231'
            }
        },
        data: data2
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function bt01() {
 var myChart = echarts.init(document.getElementById('bt01'));
	var data1=408//己完成
var data2=497//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
          text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '城建',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#ff9999', '#ffffcc'],
    series: [
		{
        name: '检点',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '求助'
            },
            {
                value: data2,
                name: '其他'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function bt02() {
 var myChart = echarts.init(document.getElementById('bt02'));
var data1=92//己完成
var data2=221//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
          text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '交通',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#ff9999', '#ffffcc'],
    series: [
		{
        name: '检点',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '求助'
            },
            {
                value: data2,
                name: '其他'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function bt03() {
 var myChart = echarts.init(document.getElementById('bt03'));
var data1=72//己完成
var data2=44//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [ {
        text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    },
			{
        text: '教育',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#ff9999', '#ffffcc'],
    series: [
		{
        name: '检点',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {show: false,
           
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [
            {
                value: data1,
                name: '求助'

            },{
                value: data2,
                name: '其他'
            },
        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function bt04() {
 var myChart = echarts.init(document.getElementById('bt04'));
var data1=220//己完成
var data2=127//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
         text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '就业',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#ff9999', '#ffffcc'],
    series: [
		{
        name: '检点',
        type: 'pie',
        center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '求助'
            },
            {
                value: data2,
                name: '其他'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		



















