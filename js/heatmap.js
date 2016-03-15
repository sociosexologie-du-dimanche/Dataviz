var margin = { top: 50, right: 0, bottom: 100, left: 60 },
          width = 980- margin.left - margin.right,
          height = 430 - margin.top - margin.bottom,
          gridSize = Math.floor(width / 24),
          legendElementWidth = gridSize*2,
          buckets = 6,
          colors = ["rgba(64, 76, 87, 0.99)","rgba(86, 78, 103, 0.99)","rgba(129, 98, 137, 0.99)","rgba(170, 119, 170, 0.99)","rgba(212, 140, 203, 0.99)","#FEA1EB"], // alternatively colorbrewer.YlGnBu[9]
          actor = ['1','2','3','4','5','6','7','8','9','10'],
eps1=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'];

      d3.tsv("js/donneessuce.tsv"),
        function(d) {
         // var strings = d3.tsv.parse(string);
          return {
            x: +d.x,
            y: +d.y,
            rep: +d.rep,
            leg: d.leg,
          };
        },
        function(error, data) { 
          var colorScale = d3.scale.quantile()
               .domain([-1, buckets-1, 10])
              .range(colors);

          var svg = d3.select("#chart").append("svg")
              .attr("width", 1040)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          var dayLabels = svg.selectAll(".dayLabel")
              .data(actor)
              .enter().append("text")
                .text(function (d) { return d; })
                .attr("x", 0)
                .attr("y", function (d, i) { return i * gridSize; })
                .style("text-anchor", "end")
                .attr("transform", "translate(-10," + gridSize / 1.5 + ")")
                .attr("class", function (d, i) { return ((i >= 0 && i <= 4) ? "dayLabel mono axis axis-workweek" : "dayLabel mono axis"); });

          var timeLabels = svg.selectAll(".timeLabel")
              .data(eps1)
              .enter().append("text")
                .text(function(d) { return d; })
                .attr("x", function(d, i) { return i * gridSize; })
                .attr("y", 0)
                .style("text-anchor", "middle")
                .attr("transform", "translate(" + gridSize / 2 + ", -10)")
                .attr("class", function(d, i) { return ((i >= 7 && i <= 16) ? "timeLabel mono axis axis-worktime" : "timeLabel mono axis"); });

          console.log(data);

          var heatMap = svg.selectAll(".hour")
              .data(data)
              .enter().append("rect")
              .attr("x", function(d) { return (d.x - 1) * gridSize; })
              .attr("y", function(d) { return (d.y - 1) * gridSize; })
              
              .attr("class", "hour bordered")
              .attr("width", gridSize)
              .attr("height", gridSize)

              .style("fill", colors[0])



              .on("mouseover", function(d){
               //highlight text
               d3.select(this).classed("cell-hover",true);
               d3.selectAll(".timeLabel").classed("text-highlight",function(r,ri){ return ri==(d.x-1);});
               d3.selectAll(".dayLabel").classed("text-highlight",function(c,ci){ return ci==(d.y-1);});
               
               //Update the tooltip position and value
               d3.select("#tooltip")
                 .style("left", (d3.event.pageX+10) + "px")
                 .style("top", (d3.event.pageY-10) + "px")
                 .select("#value");
                  
               //Show the tooltip
               
              if (d.leg.length==0) {
                 d3.select("#tooltip").classed("hidden", true);
              } 
              else {
                	d3.select("#tooltip").classed("hidden", false)
                  .html("<strong>movie:</strong> <span style='color:#2ECC71'>" +d.movie+ "</span>");
                	}
                
             
              }
                



        })//onmouseover 

              .on("mouseout", function(){
               d3.select(this).classed("cell-hover",false);
               d3.selectAll(".timeLabel").classed("text-highlight",false);
               d3.selectAll(".dayLabel").classed("text-highlight",false);
               d3.select("#tooltip").classed("hidden", true);
        });

          heatMap.transition().duration(1000)
              .style("fill", function(d) { return colorScale(d.value); });

          //heatMap.append("title").text(function(d) { return d.value; });
            
          var legend = svg.selectAll(".legend")
              .data([0].concat(colorScale.quantiles()), function(d) { return d; })
              .enter().append("g")
              .attr("class", "legend");

          legend.append("rect")
            .attr("x", function(d, i) { return legendElementWidth * i; })
            .attr("y", height)
            .attr("width", legendElementWidth)
            .attr("height", gridSize / 2)
            .style("fill", function(d, i) { return colors[i]; });

          legend.append("text")
            .attr("class", "mono")
            .text(function(d) { return "≥ " + Math.round(d); })
            .attr("x", function(d, i) { return legendElementWidth * i; })
            .attr("y", height + gridSize);

          legend.append("text")
            .text("Season 1")
            .attr("font-weight", "light")
            .attr("x", 880)
            .attr("y", height +10 ) ;

            legend.append("text")
            .attr("class", "caption")
            .text("mouse over the graph for details")
            .attr("fill", "#797171")
            .attr("x", 580)
            .attr("y", height +10 ) ;

         

        
       });


    