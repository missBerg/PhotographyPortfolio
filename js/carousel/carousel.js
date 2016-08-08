module.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [
      {
          image: 'assets/family.jpg',
          text: 'Intimate family photography',
		  title: 'Family',
          id: 0
      },
      {
          image: 'assets/newborn.jpg',
          text: 'Capturing beautiful moments',
		  title: 'Newborn',
          id: 1
      },
      {
          image: 'assets/pregnancy.jpg',
          text: 'Your unique experience worth remembering',
		  title: 'Pregnancy',
          id: 2
      },
	  {
          image: 'assets/children.jpg',
          text: 'Making sure they are not growing up too fast',
		  title: 'Children & Beyond',
          id: 3
      }
  ];
  var currIndex = 0;
});