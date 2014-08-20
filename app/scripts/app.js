var App = window.App = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

require('scripts/adapters/*');
require('scripts/mixins/*');
require('scripts/serializers/*');
require('scripts/transforms/*');

require('scripts/initApp');