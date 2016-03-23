$(function () {
    $('#polsodo').highcharts({ 
     		colors: ['#CBA148', '#107671', '#004C59'],
        title: {
            text: '',
            x: -20 //center
        },
       
        xAxis: {
            categories: ['Front de Gauche', 'PS','Europe Ecologie les Verts','Modem-UDI','UMP','Front National']
        },
        yAxis: {
            title: {
                text: 'Pourcentage (%)'
            },
             tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% parmi les ' + this.point.name.toLowerCase();
            }
        },
        
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Ont déjà eu une relation sexuelle avec plus de deux personnes en même temps',
            data: [22, 17, 16, 13, 14, 21],
            visible : false
        }, {
            name: 'Ont déjà eu une relation homosexuelle',
            data: [16, 15, 18, 11, 10, 15],
            visible : false
        }, {
            name: 'Ont déjà pratiqué la pénétration anale',
            data: [55, 53, 51, 49, 50, 57]
            
        }]
        
        
    });
});

