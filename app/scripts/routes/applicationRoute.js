/*global App, Ember*/
App.ApplicationRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        this.transitionTo('dashboard');
    }
});
