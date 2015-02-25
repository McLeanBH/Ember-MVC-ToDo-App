// window.Todos = Ember.Application.create(); // --> per tutorial
// Todos.ApplicationAdapter = DS.FixtureAdapter.extend(); // --> per tut

export default DS.RESTAdapter.extend({});

// export default Ember.Route.extend({
//     model: function(){
//       console.log('application route');
//       return [
//         {
//           title: "ToDo",
//           isCompleted: false
//         },
//       ];
//     },
//   });

    // this setupController fxn is from the bookmark example, will come back to it when I reach this point in tutorial.

  //   setupController: function(controller, model) {
  //     controller.set('todos', model.reduce(function(acum, item){
  //       return acum.concat(item.todos);
  //     }, []));
  //   }
  // });
