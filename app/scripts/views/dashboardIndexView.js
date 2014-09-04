/*global App, Ember, $ */
App.DashboardIndexView = Ember.View.extend({
    
    didInsertElement: function () {
        this._super();
        var controller = this.get('controller');
        controller.showCharts();
        this.tick();
    },



    willDestroyElement: function() {
        clearTimeout(this._timer);
    },

    tick: function() {
        var interval = 1000;
        var controller = this.get('controller');
        this._timer = setInterval(function(){ controller.refreshData(); }, interval);
    }

});