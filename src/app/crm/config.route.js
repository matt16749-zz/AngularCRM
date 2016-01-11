(function(){
  'use strict';
  
  angular
    .module('app.crm')
    .config(configFunction)
  
  configFunction.$inject = ['$routeProvider'];
  
  function configFunction($routeProvider){
    $routeProvider.when('/crm',{
      templateUrl: 'app/crm/crm.html',
      controller: 'CrmController',
      controllerAs: 'vm'
    });    
  }
})();