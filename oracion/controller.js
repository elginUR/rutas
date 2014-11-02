
var controladores={};

controladores.CtrlUsuario= function($scope)
{

$scope.usuarios=[{nom:'elgin1',ape:'nay1'},
				
				{nom:'nayer',ape:'nay2'},

				{nom:'snayder',ape:'nay3'},

				{nom:'tayler',ape:'nay4'},

				{nom:'sinter',ape:'nay5'},	

				];

 $scope.ordenarPor = function(orden) {
    $scope.ordenSeleccionado = orden;
  };

};



controladores.CtrlInsertar=function($scope)
{

	$scope.usuario={};

	$scope.NuevoUsuario= function()
	{

		$scope.usuarios.push($scope.usuario);
	};

};



controladores.CtrlEditar = function($scope,$location,$routeParams)
{




};



controladores.CtrlEliminar= function($scope,$location,$routeParams)

{


};


app.controller(controladores);