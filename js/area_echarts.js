
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));
var data = [
     {name: '甘肃', value: 256},//广东 value 可控制圆点大小
     {name: '四川', value: 253},//江苏
     {name: '河南', value: 207},//陕西
     {name: '北京', value: 81}//北京
];
		var toolTipData = [

    {name:"甘肃",value:[{name:"残疾人数量",value:1716984},{name:"留言数",value:81}]},
    {name:"四川",value:[{name:"残疾人数量",value:1698585},{name:"留言数",value:61}]},
    {name:"河南",value:[{name:"残疾人数量",value:1381697},{name:"留言数",value:194}]},
    {name:"北京",value:[{name:"残疾人数量",value:542181},{name:"留言数",value:224}]},

];
var geoCoordMap = {
    '甘肃':[103.8235780073,36.0596398322],
    '四川':[104.0645185402,30.573884935],
    '河南':[113.7468087479,34.7663740731],
    '北京':[116.383491,39.921771],
 
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
   // backgroundColor: '#404a59',
    title: {
        text: '',
        subtext: '',
        sublink: 'https://gitee.com/iGaoWei/big-data-view',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
		formatter: function(params) {

            if (typeof(params.value)[2] == "undefined") {

                var toolTiphtml = ''

                for(var i = 0;i<toolTipData.length;i++){

                    if(params.name==toolTipData[i].name){

                        toolTiphtml += toolTipData[i].name+':<br>'

                        for(var j = 0;j<toolTipData[i].value.length;j++){

                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"

                        }

                    }

                }

                console.log(toolTiphtml)

                // console.log(convertData(data))

                return toolTiphtml;

            } else {

                var toolTiphtml = ''

                for(var i = 0;i<toolTipData.length;i++){

                    if(params.name==toolTipData[i].name){

                        toolTiphtml += toolTipData[i].name+':<br>'

                        for(var j = 0;j<toolTipData[i].value.length;j++){

                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"

                        }

                    }

                }

                console.log(toolTiphtml)

                // console.log(convertData(data))

                return toolTiphtml;

            }

        }
		
		
    },
  
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#BC949C',
                borderColor: '#6B1726'
            },
            emphasis: {
                areaColor: '#6B1726'
            }
        }
    },
    series : [
        {
            name: '',
            type: 'effectScatter',
			
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 15;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffeb7b'
                }
            }
        }
		
		/**
		,
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 20;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffd800',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,.3)'
                }
            },
            zlevel: 1
        }
		**/
    ]
};
		
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})

