var app = angular.module('SuggestionBox', []);

// Controllers
app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
	$scope.hello = "Hello, AngularJS!";
	$scope.posts = suggestions.posts;
	
	$scope.addSuggestion = function() {
		//if input empty, don't submit
		if(!$scope.title || $scope.title === "") {
			return;
		}
		 
		//push suggestion posts in suggestions.js
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
		});
		 
		//after submit, clear input
		$scope.title = '';
	}
	
	$scope.upVote = function(post) {
		post.upvotes+=1;
	}
}]);


// Services
app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts: [
			{
				title: 'Today I eat BBQ chicken',
				upvotes: 3,
				comments: []
			},
			{
				title: 'I go to class this morning',
				upvotes: 2,
				comments: []
			},
			{
				title: 'Yesterday I see a rabid dog',
				upvotes: 2,
				comments: []
			},
			{
				title: 'I check facebook last night',
				upvotes: 1,
				comments: []
			}
		]
	};
	return demoSuggestions;
}]);
