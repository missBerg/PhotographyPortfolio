module.controller('PortfolioCtrl', function ($scope) {
    
    var portfolios = [
        {
            "name": 'Family',
            "title": 'Intimate photography of your family',
			"photos": [
				["assets/Family/01.jpg", "assets/Family/02.jpg", "assets/Family/03.jpg", "assets/Family/04.jpg"]
			],
			"testemonies":[
				{
					"author" : "The Jaisok Family",
					"text" : "Bla bla bla",
					"img" : "img.jpg"
				}
			]
        }
		
    ];
    
    var portfolio_map = {'family': 0, 'newborn': 1 };
    
    var portfolio = portfolios[portfolio_map['family']];
    $scope.name = portfolio.name;
    $scope.title = portfolio.title;
    $scope.selected = portfolio;
});