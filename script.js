

$('#ton').on('click', function() {
   
        let tg = window.Telegram.WebApp; 
        let username = tg.initDataUnsafe.username;

        let usernameHtml = document.getElementById('username1')
        usernameHtml.innerHTML = username;

    let energy = $('#myenergy').html();
    let htmlEnergy= document.getElementById('myenergy')
    let newEnergy = Number(energy) - 1;
    let balance = $('#balance').html();
    let htmlBalance = document.getElementById('balance')
    let newBalance = parseFloat(balance) + 0.000001;

    if (Number(energy) != 0) {
        htmlEnergy.innerHTML = newEnergy;
        htmlBalance.innerHTML = newBalance.toFixed(6);    
    }
    else {
        console.log('Energy limit!')
    }
    
})

$('#mine').on('click', function() {

})

$('#shop').on('click', function() {

})

$('#profile').on('click', function() {
    Location.href('/team.html')
})