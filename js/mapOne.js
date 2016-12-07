
		var projection = d3.geoAlbers()
    		.scale(21500)
    		.translate([1100, -3150])
    		.precision(.1);

		var path = d3.geoPath()
				       .projection(projection);

		var svg = d3.select("svg");
		
		d3.json("sanAntonio.geojson", function(error, data) {
			if (error) throw error;

			svg.append("path")
				.datum(data)
				.attr("class", "county")
				.attr("d", path);			

		});		       