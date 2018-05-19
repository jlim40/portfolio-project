function toggleMenuButton() {
  $('.nav-button').toggleClass('is-open');
}

$(document).ready(function() {
  $('.nav-button').click(function(e) {
    e.preventDefault();
    toggleMenuButton();
  });
});
