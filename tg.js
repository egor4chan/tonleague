var WebApp = window.Telegram.WebApp;

WebApp.expand();

var username = WebApp.initDataUnsafe.user.username;

var nick_html = document.getElementById('nick');
nick_html.innerHTML = `@${username}`;