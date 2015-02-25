// per ember-cli docs, using ember data (DS) in your modules, you must import them..

import DS from "ember-data";

// Todos.Todo = DS.Model.extend({
//   title: DS.attr('string'),
//   isCompleted: DS.attr('boolean')
// }); //from tut

// export default DS.Model.extend({});



var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: ('blooean')
});

Todo.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Learn Ember.js', isCompleted: true},
    {id: 2, title: '...', isCompleted: false},
    {id: 3, title: 'Profit', isCompleted: false}
  ]
});
