$(function() {
  $('#confirm').on('click',function(e){
    e.preventDefault();
    const formData = $('form').serialize();
    location.href=`/inquiry/index.html?${formData}`;
  });
  $('#submit').on('click', function(e){
    e.preventDefault();
    location.href='/inquiry/thanks/index.html';
  })
  $('#cancel').on('click', function(e){
    e.preventDefault();
    const formData = $('form').serialize();
    location.href=`/index.html?${formData}`;
  })

  // お問い合わせ確認ページ値入力
  let queryString = window.location.search;
  if(queryString){
    queryString = queryString.substring(1);
    const parameters = queryString.split('&');
  
    for (let i = 0; i < parameters.length; i++) {
      let element = parameters[i].split('=');
  
      let paramName = decodeURIComponent(element[0]);
      let paramValue = decodeURIComponent(element[1]);

      document.getElementById(paramName).value = paramValue;
    }
  }
})
