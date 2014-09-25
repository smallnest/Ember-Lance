/*global Ember, App, Bootstrap, Bootstrap.NM */

App.PluginsValidationController = Ember.ObjectController.extend(Ember.Validations.Mixin, {
	name: null,
	uri: 'http://colobu.com',
	email: 'abc@colobu.com',
	age: 200,
	
    validations: {
        name: {
            presence: true
        },
		uri: {
            url: { allowBlank: false, allowIp: true, allowPort: true, protocols: ['http', 'https', 'ftp'] }
        },
		email: {
            format: /.+@.+\..{2,4}/
        },
		age: {
			numericality: { onlyInteger: true, greaterThan: 0, lessThanOrEqualTo : 150 }
        }
    }
});