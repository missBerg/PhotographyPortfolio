module.controller('PortfolioCtrl', function ($scope) {
    
    var portfolios = [
        {
            "name": 'Family',
            "title": 'Intimate photography of your family',
            "top_row": ["/assets/landscape_small.jpg", "/assets/landscape_small.jpg", "/assets/landscape_small.jpg", "/assets/landscape_small.jpg"],
            "bottom_row": ["/assets/landscape_small.jpg", "/assets/landscape_small.jpg", "/assets/landscape_small.jpg", "/assets/landscape_small.jpg"]
        }    
    ];
    
    var portfolio_map = {'family': 0 };
    
    var portfolio = portfolios[portfolio_map['family']];
    $scope.name = portfolio.name;
    $scope.title = portfolio.title;
    $scope.selected = portfolio;
});