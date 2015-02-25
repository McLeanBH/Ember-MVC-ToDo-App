  window.Todos = Ember.Application.create(); // --> per tutorial

  export default Ember.Route.extend({
    model: function(){
      console.log('application route');
    }
  });
  //     return [
  //       {
  //         task: "ToDo",
  //         completed: false
  //       },
  //     ];
  //   },
  // });

    // this setupController fxn is from the bookmark example, will come back to it when I reach this point in tutorial.

  //   setupController: function(controller, model) {
  //     controller.set('todos', model.reduce(function(acum, item){
  //       return acum.concat(item.todos);
  //     }, []));
  //   }
  // });
