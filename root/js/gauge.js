
var legend1 = "<span style='font-weight:100'>Un peu</span>",
    legend2 = "<span style='font-weight:100'>Beaucoup</span>",
    legend3 = "<span style='font-weight:100'>Pas du <br/>tout</span>";




$(function () {
    
    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
                backgroundColor: 'none'
            },
            colors: ['#CBA148', '#0092B9', '#107671']
        });
    }
    // 

    Highcharts.chart('gauge', {

        chart: {
            type: 'solidgauge',
            marginTop: 0
        },

        title: {
            text: '',
        },

        tooltip: {
            borderWidth : 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '15px',
                fontFamily: 'Gill Sans'
            },
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth, labelHeight) {
                return {
                    x: 200 - labelWidth / 2,
                    y: 150
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for 'un peu H'
                outerRadius: '112%',
                innerRadius: '100%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),            
                borderWidth:0,


            }, { // Track for 'un peu F'
                outerRadius: '100%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                 borderWidth:0,


            }, { // Track for Beaucoup H
                outerRadius: '87%',
                innerRadius: '75%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
								borderWidth:0,


            }, { // Track for Beaucoup F
                outerRadius: '75%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Pas du tout H
                outerRadius: '62%',
                innerRadius: '50%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Pas du tou F
                outerRadius: '50%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 60,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: 17,
                dataLabels: {
                    enabled: false
                },
                linecap : 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: '(hommes) <br/><b>Un peu :</b>',
            borderColor:Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '106%',
                innerRadius: '106%',
                y: 40
            }]
        }, {
            name: '(femmes) <br/><b>Un peu :</b>',
            borderColor:Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '94%',
                innerRadius: '94%',
                y: 51
            }]
        } , {
            name: '(hommes) <br/><b>Beaucoup :</b>',
            borderColor:Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '81%',
                innerRadius: '81%',
                y: 49
            }]
        }, {
            name: '(femmes) <br/><b>Beaucoup :</b>',
            borderColor:Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '69%',
                innerRadius: '69%',
                y: 36
            }]
        } , {
            name: '(hommes) <br/><b>Pas du tout :</b>',
            borderColor:Highcharts.getOptions().colors[2],
						data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '56%',
                innerRadius: '56%',
                y: 11
            }]
        }, {
            name: '(femmes) <br/><b>Pas du tout :</b>',
            borderColor:Highcharts.getOptions().colors[2],
						data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '44%',
                innerRadius: '44%',
                y: 15
            }]
        }]
    },

    /**
     * In the chart load callback, add icons on top of the circular shapes
     */
    function callback() {

        // Move icon
        this.renderer.text(legend1, -55, 5)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 26)
            .add(this.series[2].group);

        // Exercise icon
        this.renderer.text(legend2, -65, 10)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 61)
            .add(this.series[2].group);

        // Stand icon
        this.renderer.text(legend3,-50,5)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 96)
            .add(this.series[2].group);
    });


});



