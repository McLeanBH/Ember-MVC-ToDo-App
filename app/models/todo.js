// per ember-cli docs, using ember data (DS) in your modules, you must import them..

import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: ('blooean')
});

Todo.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Make ToDo App From Tutorial', isCompleted: true},
    {id:2, title: 'Figure out why this item is completed despite it being marked "false" in my route', isCompleted: false}
    // {id: 2, title: 'Figure out what I am actually doing.', isCompleted: false},
    // {id: 3, title: 'Profit', isCompleted: false}
  ]
});

export default Todo;

// Todos.Todo = DS.Model.extend({
//   title: DS.attr('string'),
//   isCompleted: DS.attr('boolean')
// }); //from tut
// export default DS.Model.extend({});
