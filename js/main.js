$(function(){
    var list = ['1. 前言','2. 中国手游市场的发展','3. 中国手游市场的现状','4. 游戏类型分布','5. 用户时间花费',
        '6. 用户性别分布','7. 用户年龄分布','8. 终章'
    ];
    var h5 = new H5();

        h5.whenAddPage = function(){
            this.addComponent('footer',{
                bg: 'imgs/slide-up1.png',
                css: {
                    width: '100%',
                    height: '3.5%',
                    opacity: 0,
                    left: 0,
                    bottom: '-3.5%',
                    zIndex: 999
                },
                animateIn: {
                    opacity: 1,
                    bottom: 0
                },
                animateOut: {
                    opacity: 0,
                    bottom: '-3.5%'
                },
                delay: 500
            });
        };

        h5
        .addPage('face')
           .addComponent('topic',{
                center: true,
                width: 0.66,
                height: 0.13,
                bg: 'imgs/shuju1.png',
                css: {
                    'opacity':0,
                    'color': '#fff',
                    'font-size': 40,
                    'text-align': 'center'
                },
                animateIn: {
                    top: '21%',
                    opacity: 1
                },
                animateOut: {
                    top: 0,
                    opacity: 0
                }
           })
           .addComponent('slogan',{
                center: true,
                text: '2016年中国手游报告',
                width: 0.57,
                height: 0.087,
                css: {
                    'opacity': 0,
                    'top': '37.9%',
                    'font-size': 20,
                    'color': '#fff',
                    'text-align': 'center'
                },
                animateIn: {
                    opacity: 1
                },
                animateOut: {
                    opacity: 0
                },
                delay: 800
           })
           .addComponent('face-ad-left',{
                width: 0.539,
                height: 0.44,
                bg: 'imgs/ad-left.png',
                css: {
                    opacity: 0,
                    left: '-30%',
                    bottom: '-30%'
                },
                animateIn: {
                    opacity: 1,
                    left: 0,
                    bottom: 0
                },
                animateOut: {
                    opacity: 0,
                    left: '-30%',
                    bottom: '-30%'
                },
                delay: 1000
           })
           .addComponent('face-ad-right',{
                width: 0.461,
                height: 0.395,
                bg: 'imgs/ad-right.png',
                css: {
                    opacity: 0,
                    right: '-30%',
                    bottom: '-30%'
                },
                animateIn: {
                    opacity: 1,
                    right: 0,
                    bottom: 0
                },
                animateOut: {
                    opacity: 0,
                    right: '-30%',
                    bottom: '-30%'
                },
                delay: 1000
           });
        // 目录
        var catalog=h5.addPage()
            .addComponent('caption',{
                text: '目录(可点击跳转)',
                css: { 'opacity': 1 }
            });
            for (var i = 0; i < list.length; i++) {
                catalog.addComponent('list',{
                    text: list[i],
                    css: {
                        left: '20%',
                        'font-size': 14,
                        top:20+8*i+'%'
                    },
                    click: function(i){
                        return function(){
                            $.fn.fullpage.moveTo(3+i);
                        };
                    }(i)
                });
            }

        h5.addPage()
            .addComponent('caption',{
                text: '前言',
                css: { 'opacity': 1 }
            })
            .addComponent('text',{
                text: '819亿=首超端游',
                width: 1,
                height: 0.0475,
                css: {
                    'opacity': 0,
                    'text-align': 'center',
                    'font-size': 24,
                    'top': '33%'
                },
                animateIn: {
                    opacity: 1,
                    top: '26.9%'
                },
                animateOut: {
                    opacity: 0,
                    top: '33%'
                }
            })
            .addComponent('desc',{
                center: true,
                width: 0.78,
                height: 0.268,
                bg: 'imgs/article-bg.png',
                css: {
                    top: '38%',
                    'transform': 'translateX(-10px)',
                    'font-size': '14px',
                    'text-align': 'junstify',
                    'line-height': 1.8,
                    'text-indent': '2em',
                    'word-break': 'break-all',
                    color: '#fff',
                    padding: '15px 10px',
                    opacity: 0
                },
                text:'如果有人要写中国游戏行业发展史，2016年可能是具有节点意义的一年。 这一年，移动游戏的市场份额第一次超过客户端游戏，成为份额最大的细分市场。中国游戏产业各个细分市场发展逐渐明朗，移动游戏继续保持高速增长。',
                animateIn: {top: '34.3%', opacity: 1},
                animateOut: {top:'38%',opacity: 0},
                delay: 1000
            })
            .addComponent('people',{
                center: true,
                width: 0.804,
                height: 0.268,
                bg: 'imgs/bg_libai1.png',
                css:{bottom: 0,opacity:0},
                animateIn: {bottom: '6.2%',opacity:1},
                animateOut: {bottom: 0,opacity:0}
            })
        // bar-v
        .addPage()
            .addComponent('caption',{
                text: '中国手游市场的发展',
                css: { 'opacity': 1 }
            })
            .addComponent('bar-v',{
                type: "bar-v",

                width: 0.828,
                height: 0.528,
                data: [
                    ['2010' , 0.0091 ,'', '9.1'],
                    ['2011' , 0.017 ,'','17.0'],
                    ['2012' , 0.0324 ,'','32.4'],
                    ['2013' , 0.1124 ,'','112.4'], 
                    ['2014' , 0.2749 ,'','274.9'],
                    ['2015' , 0.5146 ,'','514.6'],
                    ['2016' , 0.8192 ,'#ff7676','819.2']
                ],
                css: {
                    top: '18.5%',
                    opacity: 0
                },
                center: true,
                animateIn: { 
                    top: '24%',
                    opacity: 1 
                },
                animateOut: { 
                    top: '18.5%',
                    opacity: 0
                }
            })
            .addComponent('front-msg',{
                text: '中国移动游戏市场实际销售收入(亿元)',
                animateIn: {opacity: 1},
                animateOut: {opacity: 0}
            })              
        // Pie 
        .addPage()
            .addComponent('caption',{
                text: '中国手游市场现状',
                css: { 'opacity': 1 }
            })
            .addComponent('pie',{
                type: "pie",
                width: 0.588,
                height: 0.588,

                data: [
                    ['手游' , 0.495 , '#c33531'],
                    ['端游' , 0.392 , '#5ab0e6'],
                    ['页游' , 0.113 , '#91caaf']
                ],
                css: {
                    top: '30%',
                    opacity: 0
                },
                center: true,
                animateIn: { opacity: 1 },
                animateOut: { opacity: 0 }
            })
            .addComponent('android-msg',{
                text: '手机游戏占到半壁江山',
                animateIn: {opacity: 1},
                animateOut: {opacity: 0}
            })
        // Bar
        .addPage()
            .addComponent('caption',{
                text: '游戏类型分布',
                css: { 'opacity': 1 }
            })
            .addComponent('bar',{
                type: "bar",

                width: 0.828,
                height: 0.528,
                data: [
                    ['角色扮演' , 0.651 , '#c33531'],
                    ['动作冒险' , 0.575 , '#91c7af'],
                    ['休闲益智' , 0.54 , '#4e728c'],
                    ['飞行射击' , 0.534 , '#d38265'], 
                    ['经营策略' , 0.512 , '#939651'],
                    ['棋牌游戏' , 0.504 , '#61a0a9'], 
                    ['体育竞技' , 0.396 ,'#e98b2b']
                ],
                css: {
                    top: '18.5%',
                    opacity: 0
                },
                center: true,
                animateIn: { 
                    top: '30%',
                    opacity: 1 
                },
                animateOut: { 
                    top: '18.5%',
                    opacity: 0
                }
            })
            .addComponent('front-msg',{
                text: '多选，各选项之和大于100%',
                animateIn: {opacity: 1},
                animateOut: {opacity: 0}
            })
        // polyline
        .addPage()
            .addComponent('caption',{
                text: '用户时间花费',
                css: { 'opacity': 1 }
            })
            .addComponent('polyline',{
                type: "polyline",

                width: 0.78,
                height: 0.37,
                data: [
                    ['15分钟' , 0.128 ],
                    ['15-30' , 0.176 ],
                    ['30-60' , 0.244 ],
                    ['1-3小时' , 0.30, '#ff7676'],
                    ['3小时' , 0.152 ]
                ],
                css: {
                    top: '18.5%',
                    opacity: 0
                },
                center: true,
                animateIn: { 
                    top: '40%',
                    opacity: 1 
                },
                animateOut: { 
                    top: '18.5%',
                    opacity: 0
                }
            })
            .addComponent('front-msg2',{
                text: '中度、重度用户近七成',
                animateIn: {opacity: 1},
                animateOut: {opacity: 0}
            })
        .addPage()
            .addComponent('caption',{
                text: '用户性别分布',
                css: { 'opacity': 1 }
            })
            .addComponent('pie',{
                type: "pie",
                width: 0.588,
                height: 0.588,

                data: [
                    ['男性' , 0.647 , '#0089a6'],
                    ['女性' , 0.353 , '#e5584f']
                ],
                css: {
                    top: '30%',
                    opacity: 0
                },
                center: true,
                animateIn: { opacity: 1 },
                animateOut: { opacity: 0 }
            })
            .addComponent('android-msg',{
                text: '男性是手机游戏的主力军',
                animateIn: {opacity: 1},
                animateOut: {opacity: 0}
            })
        // Point
        .addPage()
            .addComponent('caption',{
                text: '用户年龄分布',
                css: { 'opacity': 1 }
            })
            .addComponent('point',{
                type: "point",

                width: 0.41,
                height: 0.232,
                data: [
                    ['20-30岁' , 0.6 , '#c15140'],
                    ['20岁以下' , 0.2 , '#90c8af', 0 , '-60%'],
                    ['30岁以上' , 0.2 , '#4e728c', 0 , '120%'] 
                ],
                css: {
                    bottom: '30%',
                    opacity: 0
                },
                center: true,
                animateIn: { opacity: 1 },
                animateOut: { opacity: 0 }
            })
        .addPage('end')
            .addComponent('logo',{
                center: true,
                width: 0.659,
                height: 0.13,
                bg: 'imgs/shuju.png',
                css: {
                    opacity: 0,
                    top: '35%'
                },
                animateIn: {
                    opacity: 1,
                    top: '35%'
                },
                animateOut: {
                    opacity: 0,
                    top: '40%'
                }
            })
            .addComponent('slogan',{
                center: true,
                width: 0.49,
                height: 0.04,
                text: '以数据论英雄',
                css: {
                    'font-size': '20px',
                    'text-align': 'center',
                    'font-family': 'sim-sun',
                    'font-weight': 600,
                    opacity: 0,
                    top: '50%'
                },
                animateIn: {
                    opacity: 1,
                    left: '50%'
                },
                animateOut: {
                    opacity: 0,
                    left: 0
                },
                delay: 500
            })
            .addComponent('share',{
                width: 0.2,
                height: 0.2,
                bg: 'imgs/share.png',
                css: {
                    opacity: 0,
                },
                animateIn: {
                    opacity: 1,
                    right: '5%',
                    top: '5%'
                },
                animateOut: {
                    opacity: 0,
                    right: '30%',
                    top: '30%'
                },
                delay: 500
            })
            .addComponent('backTop',{
                center: true,
                width: 0.08,
                height: 0.08,
                bg: 'imgs/back_face.png',
                css: {
                    opacity: 1,
                    top: '70%'
                },
                delay: 500,
                click : function(){
                    $.fn.fullpage.moveTo(1);
                }
            })
        .loader(['imgs/ad-left.png','imgs/ad-right.png','imgs/article-bg.png','imgs/back_face.png','imgs/bg_page2.jpg','imgs/logo1.png','imgs/bg_libai1.png','imgs/share.png','imgs/slide-up1.png','imgs/shuju1.png','imgs/title_bg.png']);
});