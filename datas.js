(function(){
  var app = angular.module('datas', []);

  var projets = [];

  app.service('Datas', function($http) {

    this.loadProjets = function(){
      $http({
        method : 'GET',
        url : 'https://parseapi.back4app.com/classes/Projet/',
        headers: {
          'X-Parse-Application-Id':'qF9hCgG0jmXzFlLToSQsDGqhh64YzGlmtHZllhNz',
          'X-Parse-REST-API-Key':'1RzyJvIxXSr0vXwHFNEvlNhLJTJEEOD453Z2eSZF'
        }
      })
      .then(
        function(response) {
          projets = response.data.results;
          console.log("->"+projets.length);
        },
        function(response) {
          alert("Error");
        }
      );
    };

    this.loadProjet = function(id){
      $http({
        method : 'GET',
        url : 'https://parseapi.back4app.com/classes/Projet/'+id,
        headers: {
          'X-Parse-Application-Id':'qF9hCgG0jmXzFlLToSQsDGqhh64YzGlmtHZllhNz',
          'X-Parse-REST-API-Key':'1RzyJvIxXSr0vXwHFNEvlNhLJTJEEOD453Z2eSZF'
        }
      })
      .then(
        function(response) {
          projets.push(response.data);
          console.log("->"+projets.length);
        },
        function(response) {
          alert("Error");
        }
      );
    };

    this.getProjets = function() {
      return projets;
    };

    this.addProjet = function(projet){
        //projets.push(projet);
        var up=this;
        $http({
          method : 'POST',
          url : 'https://parseapi.back4app.com/classes/Projet/',
          headers: {
            'X-Parse-Application-Id':'qF9hCgG0jmXzFlLToSQsDGqhh64YzGlmtHZllhNz',
            'X-Parse-REST-API-Key':'1RzyJvIxXSr0vXwHFNEvlNhLJTJEEOD453Z2eSZF',
            'Content-Type': 'application/json'
          },
          data: {'nom': projet.nom, 'description': projet.description, 'importance': parseInt(projet.importance)}
        })
        .then(
          function(response) {
            up.loadProjet(response.data.objectId);
          },
          function(response) {
            alert("Error");
          }
        );
    };

    this.deleteProjet = function(id){
      $http({
        method : 'DELETE',
        url : 'https://parseapi.back4app.com/classes/Projet/'+id,
        headers: {
          'X-Parse-Application-Id':'qF9hCgG0jmXzFlLToSQsDGqhh64YzGlmtHZllhNz',
          'X-Parse-REST-API-Key':'1RzyJvIxXSr0vXwHFNEvlNhLJTJEEOD453Z2eSZF'
        }
      })
      .then(
        function(response) {
          for (var i = 0; i < projets.length; i++) {
            if (projets[i].objectId === id) {
              projets.splice(i, 1);
              console.log("->"+projets.length);
              return;
            }
          }
        },
        function(response) {
          alert("Error");
        }
      );
    };
  });

  })();
