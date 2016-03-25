$(function () {
    $('#nombre').highcharts({
        chart: {
            type: 'bar'
        },
             		colors: ['#CBA148', '#107671', '#004C59'],

        title: {
            text: ''
        },
        xAxis: {
            categories: ['1','Entre 2 et 3','Entre 4 et 5','Entre 6 et10','Plus de 10']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Pourcentage (%)'
            }
        },
        tooltip: {
            valueSuffix: '%'
            },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [ {
            name: 'Pas du tout satisfait',
            data: [7,10,9,9,9]
     
        },
        {
            name: 'Peu satisfait',
            data: [18,18,21,20,20]
        }]
    });
});