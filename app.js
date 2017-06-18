var app = angular.module("App", ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when("/", { //Quanto a rota for barra sera redirecionado para home.html
		templateUrl: "templates/home.html" 

	})
	.when("/pagina1", { //Quanto a rota for /pagina1 sera redirecionado para pagina1.html
		templateUrl: "templates/pagina1.html" 

	})
	.when("/pagina2", { //Quanto a rota for /pagina2 sera redirecionado para pagina2.html
		templateUrl: "templates/pagina2.html" 

	})
	.when("/pagina3", { //Quanto a rota for /pagina3 sera redirecionado para pagina3.html
		templateUrl: "templates/pagina3.html" 

	})
	.otherwise({redirectTo : "/"})
});