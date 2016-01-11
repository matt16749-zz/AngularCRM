(function(){
  'use strict';
  
  angular
    .module('app.crm')
    .controller('CrmController', CrmController)
  
  CrmController.$inject = ['firebaseArray'];
  
  function CrmController($location, $firebaseArray){
    var vm = this;    
    
    var firebaseCustomers = new Firebase('https://angular-crm.firebaseio.com/customers');
    
    function Customer(){
      this.name = '';
      this.email = '';
      this.phone = '';
      this.notes = '';
    }
    
    vm.newCustomer = new Customer();
    vm.customers = $firebaseArray(firebaseCustomers);
    vm.addCustomer = addCustomer;
    vm.removeCustomer = removeCustomer;
    
    function addCustomer(){
      vm.customers.$add(vm.newCustomer);
      vm.newCustomer = new Customer();      
    }
    
    function removeCustomer(customer){
      vm.customers.$remove(customer);
    }
  }
})();
