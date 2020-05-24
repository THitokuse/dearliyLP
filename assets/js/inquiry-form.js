$(function() {
  $('#confirm').on('click',function(e){
    e.preventDefault();
    const formData = $('form').serialize();
    location.href=`/inquiry/index.html?${formData}`;
  });
  $('#submit').on('click', function(e){
    e.preventDefault();

    let queryString = window.location.search;
    var queryObject = new Object();
    if(queryString){
      queryString = queryString.substring(1);
      const parameters = queryString.split('&');
    
      for (let i = 0; i < parameters.length; i++) {
        let element = parameters[i].split('=');
    
        let paramName = decodeURIComponent(element[0]);
        let paramValue = decodeURIComponent(element[1]);
  
        queryObject[paramName] = paramValue;
      }
    }
    const message = `
    【Dearliyお問い合わせ】
      名前： ${queryObject.family_name + queryObject.first_name}
      メールアドレス： ${queryObject.email}
      内容： ${queryObject.content}
    `;

    // slackへの通知
    const url = 'https://hooks.slack.com/services/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';
    const data = {
      text: message
    };
    const xml = new XMLHttpRequest();
    xml.open("POST", url, false);
    xml.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    xml.send(`payload=${JSON.stringify(data)}`)

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
