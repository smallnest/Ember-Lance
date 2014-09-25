/*global App, Ember, $ */
App.UiBootgridView = Ember.View.extend({
    
    didInsertElement: function () {
        this._super();
        Ember.$("#grid-basic").bootgrid();
    }

});