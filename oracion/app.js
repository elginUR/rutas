var app=angular.module('miAp', ['ngRoute'])

.config(function($routeProvider) {
	
$routeProvider 
.when('/',{

	title:'Inicio',
	templateUrl:'oracion.html'
})

.when('/contacto',{

	templateUrl:'contacto.html'

})

.when('/nosotros',{

	templateUrl:'nosotros.html',
	controller:'CtrlUsuario'
})

.otherwise({

	redirectTo:'/'
})

})


