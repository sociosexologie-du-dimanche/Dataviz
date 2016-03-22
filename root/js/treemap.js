$(function () {
    $('#treemap').highcharts({
    		chart : {
        	type : 'treemap'
        },
    		plotOptions : {
        	treemap : {
							allowDrillToNode : true,
              interactByLeaf : true,
              layoutAlgorithm : 'stripes',
              tooltip : {
              	pointFormat : '<b>{point.name}</b>'
              }
            }
        },
        series: [{
        	levels: [{
                level: 1,
                layoutAlgorithm : 'stripes',
                layoutStartingDirection : 'horizontal',
                borderWidth : 5,
                dataLabels: {
                align : 'left',
                    enabled: true,
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color : '#FFFFFF'
                    }
                }
            },{
            		level : 2,
                layoutStartingDirection : 'horizontal',
                dataLabels :{
                align : 'left',
                	enabled : true,
                  style : {
                  	fontSize : '13px'
                   },
                  color : '#FFFFFF'
                }
            },{
            		level : 3,
                layoutStartingDirection : "vertical",
                dataLabels : {
                	enabled : true,
									color : 'rgb(230,230,230)',
                  verticalAlign : 'bottom',
                  align : 'right'
                }
            }],
            data: [{
                id: 'D',
                name: 'Supérieur au bac',
            }, {
                id: 'R',
                name: 'Inférieur au bac',
            },{
            		id: 'DH',
                name: 'Hommes',
                parent : 'D'
            }, {
            		id: 'DF',
                name: 'Femmes',
                parent : 'D'
            },{
                name: 'Souvent : 48%',
                parent: 'DH',
                color : '#107671',
                value: 78.7,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 13%',
                parent: 'DH',
                color : '#004C59',
                value : 21.3,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		name : 'Souvent : 36%',
                parent: 'DF',
                color : '#CBA148',
                value : 72,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 14%',
                parent : 'DF',
                color : '#B67823',
                value : 28,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		id: 'RH',
                name: 'Hommes',
                parent : 'R',
            }, {
                id: 'RF',
                name: 'Femmes',
                parent : 'R',
            },{
                name: 'Souvent : 50%',
                parent: 'RH',
  							color: '#107671',
                value: 84.7,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 9%',
                parent: 'RH',   
                color : '#004C59',
                value : 15.3,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		name : 'Souvent : 29%',
                parent: 'RF',
                value : 61.7,
                color : '#CBA148',
                dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 18%',
                parent : 'RF',
                value : 38.3,
                color : '#B67823',
                dataLabels : {
                format : "Jamais"
                }
            }],

        }],
        title: {
            text: ''
        }
    });
})();