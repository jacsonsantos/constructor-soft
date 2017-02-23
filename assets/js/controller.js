var uri = 'http://127.0.0.1:8000/v1';

app.controller('AppCtrl', AppCtrl)
.controller('AdmCtrl', AdmCtrl);

function AppCtrl($scope, $http, $state, $httpParamSerializerJQLike){
	
	var data = {
		email:"jacsonk47@gmail.com",
		password:"jacson"
	};
	$scope.errorEmail = false;
	$scope.errorPass = false;

	$scope.signin = function (email,password) {
		var status = true;

		if (data.email != email){
			$scope.errorEmail = true;
			status = false;
		}

		if (data.password !== password) {
			$scope.errorPass = true;
			status = false;
		}

		if (status) {
			$state.go('adm');
		}

	}

}

function AdmCtrl($scope, $http, $state, $httpParamSerializerJQLike) {
	$scope.datas = [];
	$scope.newnote = false;
	$scope.user = {
		balance:'0,00',
		spent: '0,00',
		available: '0,00'
	}

	$scope.save = function() {
		$scope.oninput = false;
	}

	$scope.new = function() {
		$scope.newnote = true;
	}

	$scope.saveNote = function(note) {
		$scope.newnote = false;
		$scope.datas.push(note);
	}
}