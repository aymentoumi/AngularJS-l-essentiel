(function(){
var app = angular.module('directives', ['datas']);

  app.directive("ajoutProjetForm", function(Datas) {
      return {
          templateUrl: 'ajout-projet-form.html',
          controller: function(){
            this.projet = {};
            this.addProjet = function(){
                Datas.addProjet(this.projet);
                this.projet = {};
            };
          },
          controllerAs: 'ajoutFormCtrl'
      };
  });

  app.directive("filtrageProjetForm", function() {
      return {
          templateUrl: 'filtrage-projet-form.html'
      };
  });

  app.directive("projet", function() {
      return {
          templateUrl: 'projet.html'
      };
  });

  app.directive("listeProjets", function() {
      return {
          templateUrl: 'liste-projets.html'
      };
  });
  })();
