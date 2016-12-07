
		var width = 960,
			height = 500;

		var projection = d3.geoAlbers()
    		.scale(1000)
    		.translate([width/2, height/2])
    		.precision(.1);

		var path = d3.geoPath()
				       .projection(projection);

		var svg = d3.select("svg");
		
		d3.json("US.topojson", function(error, data) {
			if (error) throw error;

			svg.append("path")
				.datum(topojson.feature(data, data.objects.US))
				.attr("class", "states")
				.attr("d", path);		
		});		       