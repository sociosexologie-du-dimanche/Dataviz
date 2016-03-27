$(function() {
  $('#couple').highcharts({
    chart: {
      type: 'bar'
    },
    colors: ['#CBA148', '#107671', '#004C59'],
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['En couple cohabitant', 'En couple non cohabitant', 'Célibataire ayant déjà été en couple', 'Célibataire n\'ayant jamais été en couple']
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
    series: [{
      name: 'Pas du tout satisfait',
      data: [5, 3, 19, 16]

    }, {
      name: 'Peu satisfait',
      data: [16, 11, 29, 29]
    }]
  });
});