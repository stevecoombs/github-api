var app = angular.module('github-api');

var id = "32408cdb51e65d524cce";
var sec = "0111cef14ba37d93d2f5cd242aeb2bce1ae8c34c";
var param = "?client_id=" + id + "&client_secret=" + sec;

app.service('githubService', function($http){
	this.getUser = function(username){
		return $http.get('https://api.github.com/users/' + username)
	}
})