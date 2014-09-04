/*global Ember, App, Bootstrap, Bootstrap.NM, d3, cubism */

App.DashboardCubismController = Ember.ObjectController.extend({
    init: function () {
        'use strict';
        /*jslint nomen:true*/
        this._super();
        /*jslint nomen:false*/
        console.debug('DashboardCubismController.js init');
    },

    showCharts: function () {
		function random(name) {
		  var value = 0,
			  values = [],
			  i = 0,
			  last;
		  return context.metric(function(start, stop, step, callback) {
			start = +start, stop = +stop;
			if (isNaN(last)) last = start;
			while (last < stop) {
			  last += step;
			  value = Math.max(-10, Math.min(10, value + .8 * Math.random() - .4 + .2 * Math.cos(i += .2)));
			  values.push(value);
			}
			callback(null, values = values.slice((start - stop) / step));
		  }, name);
		}

        var context = cubism.context()
			.serverDelay(0)
			.clientDelay(0)
			.step(1e3)
			.size(900);

		var foo = random("foo"),
			bar = random("bar");

		d3.select("#cubism_chart").call(function(div) {

		  div.append("div")
			  .attr("class", "axis")
			  .call(context.axis().orient("top"));

		  div.selectAll(".horizon")
			  .data([foo, bar, foo.add(bar), foo.subtract(bar)])
			.enter().append("div")
			  .attr("class", "horizon")
			  .style("width", "950px")
			  .call(context.horizon().extent([-20, 20]));

		  div.append("div")
			  .attr("class", "rule")
			  .call(context.rule());

		});
    },

    actions: {
        
    }
});