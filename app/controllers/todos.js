///  need to:
// - get the title 'todo', which was set by the 'New Todo' text field (1)
// - create the new Todo model (2)
// - clear the text field (3)
// - save the new model (4)
// - using 'toArray()'..... I think allows me to iterate over and delete because it's not bound. (5)


import Ember from 'ember';

var isEmpty = Ember.isEmpty;
var filterBy = Ember.computed.filterBy;
var notEmpty = Ember.computed.notEmpty;

export default Ember.ArrayController.extend({
  active: filterBy('@this', 'isCompleted', false),
  completed: filterBy('@this', 'isCompleted', true),
  state: 'all',
  hasCompleted: notEmpty('completed.[]'),
  queryParams: [
    'state'
  ],

  inflection: function(){
    var active = this.get('active.length');
    return active === 1 ? 'item' : 'items';
  }.property('active.[]'),

  allAreDone: function (key, value) {
    if (arguments.length === 2) {
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    } else {
      return !isEmpty(this) && this.get('length') === this.get('completed.length');
    }
  }.property('@each.isCompleted'),

  actions: {
    createTodo(){
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (title && !title.trim()){
        this.set('newTitle', '');
        return;
      }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    },

    clearCompleted(){
      var completed = this.get('completed');

      completed.toArray().
        invoke('deleteRecord').
        invoke('save');
    }
  }
});
