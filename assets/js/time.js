$(function() {
  const now = new Date();
  const hour = now.getHours();

  if (6 < hour < 18) {
    $('header').css('backgroundColor', '#f6efe7');
    $('footer').css('backgroundColor', '#f6efe7');
    $('.title-text').css('color', '#F0831E');
    $('.logo').children('img').attr('src', 'https://dearliy-lp.herokuapp.com/assets/images/Orange-01.png');
  } else {
    $('header').css('backgroundColor', '#d3def0');
    $('footer').css('backgroundColor', '#d3def0');
    $('.title-text').css('color', 'blue');
    $('.logo').children('img').attr('src', 'https://dearliy-lp.herokuapp.com/assets/images/Blue-02.png');
  }
})
