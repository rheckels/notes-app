var notesapp = {};

/**
 * @author Robert Heckels
 * @function Creates notesapp namespace for the application
 */
(function() {
  console.log('notesapp namespace created');
    
  var self = this;
    
  /**
    * @function Initialises other functions in namespace
    */
  this.init = function() {
    console.log('notesapp.init');

    notesapp.view.addHandlers();
  };
}).apply(notesapp);  