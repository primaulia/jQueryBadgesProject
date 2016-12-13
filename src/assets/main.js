$(function() {
  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/primAulia.json',
    dataType: 'jsonp',
    success: function(response) {
      addBadges(response.courses.completed)
    }
  })

  function addBadges(completedCourses) {
    var $badges = $('#badges')
    completedCourses.forEach(function(course) {
      let newDiv = $('<div class="course"/>')
      let newH3 = $('<h3/>')
      let newImg = $('<img/>')
      let newBtn = $('<a/>')
      
      newH3.text(course.title)
      newImg.attr('src', course.badge)
      newBtn.attr({href: course.url, target: '_blank', class: 'btn btn-primary'}).text('See Course')
      
      newDiv.append(newH3)
      newDiv.append(newImg)
      newDiv.append(newBtn)
      
      $badges.append(newDiv)
    })
  }
});
