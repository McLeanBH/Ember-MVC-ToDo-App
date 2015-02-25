import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', { path: '/' });
});

export default Router;

// implementing a Todos-Route class with a model function that returns all the existing todos


// OR
// Todos.Router.map(function(){
//   this.route('todos', { path: '/' });
// });

// OR
// Todos.Router.map(function) {
//   this.resource('todos', { path: '/' }).
// });
