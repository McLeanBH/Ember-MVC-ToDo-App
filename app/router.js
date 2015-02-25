import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', { path: '/' });
});

export default Ember.Route.extend({});




// OR
// Todos.Router.map(function(){
//   this.route('todos', { path: '/' });
// });

// OR
// Todos.Router.map(function) {
//   this.resource('todos', { path: '/' }).
// });
