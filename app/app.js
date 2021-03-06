import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver // -> allows ember to use module ember that cli set up
});

loadInitializers(App, config.modulePrefix);

export default App;

// If I understand correctly, this is the proper cli export default for app.js
// Jake verified that it is correct.
