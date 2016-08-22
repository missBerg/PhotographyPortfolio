module.controller('PackagesCtrl', function ($scope) {
    
    var packages = [
        {
            "name": 'Family',
            "title": 'Intimate photography of your family',
			"photos": [
				["assets/Family/01.jpg", "assets/Family/02.jpg", "assets/Family/03.jpg", "assets/Family/04.jpg"]
			],
			"testemonies":[
				{
					"author" : "The Jaisok Family",
					"text" : "Thank you Dorota for a great photo session! We had an amazing time and experience with you. Dorota is professional, talented,  creative, very easy to get on with and she is great with children. Our two little girls absolutely loved her. We got our pictures very quickly and they are beautiful and unique. I recommend Dorota's services and I can't wait to have a session again. Thank you.",
					"img" : "img.jpg"
				}
			]
        },
        {
            "name": 'Maternity',
            "title": 'Capturing the wait and expectations',
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
        },
        {
            "name": 'Newborn',
            "title": 'Celebrating the arrival of a family member',
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
        },
        {
            "name": 'Children',
            "title": 'Celebrating the arrival of a family member',
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
    
    var package_map = {'family': 0, 'maternity': 1, 'newborn': 2 };
    
    var chosenpackage = $routeParams.package;
    
    if(chosenpackage != null) {
        chosenpackage = chosenpackage.toLowerCase();
    }
    
    // Error handling - redirect back to the /package page if an invalid package is entered
    if(package_map[chosenpackage] == null) {
        $route.updateParams({package: ''});
    }
    
    var package = packages[package_map[chosenpackage]];
    $scope.name = package.name;
    $scope.title = package.title;
    $scope.selected = package;
});