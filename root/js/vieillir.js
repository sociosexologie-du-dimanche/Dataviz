$(function () {
    $('#vieillir').highcharts({
        chart: {
            type: 'area'
        },
        colors:['rgba(248,215,201,1)','rgba(0,146,185,0.3)','rgba(203,161,72,0.5)'],
        legend : {
        	width : 50,
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Moins de 35 ans','Entre 35 et 50 ans','Plus de 50 ans']
        },
        yAxis: {
            title: {
                text: "Part de la génération d'âge"
            },
            floor : 20
        },
        tooltip: {
            pointFormat: '{series.name} : <b>{point.y}%</b><br/>'
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Au moins deux fois par semaine',
            data: [33,31,21]
        },{
            name: 'Environ une fois par semaine',
            data: [46,46,46],
            visible : false
        },{
            name: 'Jamais',
            data: [21,23,33]
        }]
    });
});