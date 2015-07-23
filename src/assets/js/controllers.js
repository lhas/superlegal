var superLegalControllers = angular.module('superLegalControllers', []);

// Header
superLegalControllers.controller('HeaderController', ['$scope', '$location', function($scope, $location) {
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
}]);

// Home
superLegalControllers.controller('HomeController', ['$scope', function($scope) {
     
}]);

// Sobre Nós
superLegalControllers.controller('SobreNosController', ['$scope', function($scope) {
 
}]);

// Contato
superLegalControllers.controller('ContatoController', ['$scope', '$http', function($scope, $http) {
	// Inicialização das variáveis
	$scope.contato = {};
	$scope.formularioEnviado = false;

	$scope.enviarContato = function()
	{
		// Define formulário como enviado
		$scope.formularioEnviado = true;

		// Executa requisição POST para o Mandrill disparar o e-mail
		$http.post('https://mandrillapp.com/api/1.0/messages/send.json', {
			key: 'yo7eJ0r7FHX7d_Ney3OLZA',
			message: {
				html: $scope.contato.mensagem,
				text: $scope.contato.mensagem,
				subject: "[Super Legal] Contato do Site",
				from_email: "no-reply@bblender.com.br",
				from_name: $scope.contato.nome,
				to: [
					{
						email: "henrique@bblender.com.br",
						name: "Henrique BBlender",
						type: "to"
					}
				]
			} 
		});


		// Limpa formulário
		$scope.contato = {};

	}
}]);