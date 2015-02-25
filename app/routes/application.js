// window.Todos = Ember.Application.create(); // --> per tutorial
// Todos.ApplicationAdapter = DS.FixtureAdapter.extend(); // --> per tut

// export default DS.RESTAdapter.extend({});

// export default Ember.Route.extend({


export default DS.RESTAdapter.extend({
    model: function(){
      return this.store.find('todo');
    },
    setupController: function(controller, model){
      // controller is the instance of ApplicationController
      controller.set('todo', 'Learn Ember.js');
    }
});

// export default Ember.ObjectController.extend({
//   appName: 'ToDoMVC'
// });


  // Ember.js will render the application template as the main template. If App.ApplicationController is provided,
  // Ember.js will set an instance of App.ApplicationController as the controller for the template.
  // This means that the template will get its properties from the controller.
  //
  // If your app provides an App.ApplicationRoute, Ember.js will invoke the router's hooks first, before rendering the application template.
  // Hooks are implemented as methods and provide you access points within an Ember object's lifecycle to
  // intercept and execute code to modify the default behavior at these points to meet your needs.
  // Ember provides several hooks for you to utilize for various purposes (e.g. model, setupController, etc).
  // In the example below App.ApplicationRoute, which is an Ember.Route object, implements the setupController hook.
