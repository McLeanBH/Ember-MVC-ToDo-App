import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', { path: '/'}, function() { // --> this line alone determines all naming conventions (i.e. router is names 'todos.js')
    this.route('active');
    this.route('completed');
  });
});

export default Router;

// implementing a Todos-Route class with a model function that returns all the existing todos
// child routes being todo items in 'active' & 'completed' states

// OR
// Todos.Router.map(function(){
//   this.route('todos', { path: '/' });
// });

// OR
// Todos.Router.map(function) {
//   this.resource('todos', { path: '/' }).
// });

// extend constrcutor from application to make router.
// router is differenter that route.
// Its only job is to change objects into URLs.
