app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This Month\'s Bestsellers';
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
  	{
    	name: 'Never Enough Eyes',
    	price: 65,
    	pubdate: new Date('2018', '02', '15'),
    	cover: 'img/drawing1.jpg',
  	},
  	{
    	name: 'Lily',
    	price: 100,
    	pubdate: new Date('2018', '01', '08'),
    	cover: 'img/painting1.jpg',
  	},
  	{
    	name: 'The Girl With The Foxes',
    	price: 80,
    	pubdate: new Date('2018', '03', '23'),
    	cover: 'img/painting6.jpg',
  	},
  	{
    	name: 'The Girl With The Rainbow Clouds',
    	price: 75,
    	pubdate: new Date('2017', '08', '16'),
    	cover: 'img/painting5.jpg',
  	}
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
