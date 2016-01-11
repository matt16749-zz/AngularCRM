(function(){
  'use strict';
  
  angular //object using dependency injection to load all relevant modules
    .module("app", [
      //angular modules
      'ngRoute',

      //Third-party modules
      'firebase',
    
      //Custom Modules
      'app.auth',  
      'app.landing',
      'app.crm'
    ]);  
  
})();
