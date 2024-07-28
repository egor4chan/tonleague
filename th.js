var WebApp = window.Telegram.WebApp;

WebApp.expand();
WebApp.showAlert(`Добро пожаловать, ${WebApp.WebAppUser.username}`);