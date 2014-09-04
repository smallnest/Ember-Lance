/*global App, Ember, $ */
App.DashboardCubismView = Ember.View.extend({
    
    didInsertElement: function () {
        this._super();
        var controller = this.get('controller');
        controller.showCharts();
    }
});