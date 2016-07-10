module.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [
      {
          image: 'assets/family/01.jpg',
          text: 'Test text',
          id: 0
      },
      {
          image: 'assets/family/02.jpg',
          text: 'Test text 1',
          id: 1
      },
      {
          image: 'assets/family/03.jpg',
          text: 'Test text 2',
          id: 2
      }
  ];
  var currIndex = 0;
});