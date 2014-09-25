/*globals App*/

App.Router.map(function () {
    this.resource('dashboard', { path: 'dashboard' }, function () {
		this.route('cubism', { path: 'cubism' }, function () {});
    });
	this.resource('ui', { path: 'ui' }, function () {
		this.route('table', { path: 'table' }, function () {});
		this.route('panel', { path: 'panel' }, function () {});
		this.route('button', { path: 'button' }, function () {});
		this.route('notification', { path: 'notification' }, function () {});
		this.route('typography', { path: 'typography' }, function () {});
		this.route('grid', { path: 'grid' }, function () {});
		this.route('form', { path: 'form' }, function () {});
		this.route('bootgrid', { path: 'bootgrid' }, function () {});
    });
	this.resource('plugins', { path: 'plugins' }, function () {
		this.route('validation', { path: 'validation' }, function () {});
	});
});
