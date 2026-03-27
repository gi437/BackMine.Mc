function formatCard(e) {
    let v = e.value.replace(/\D/g, '');           
    if(v.length > 16) v = v.slice(0,16);          
    let parts = [];
    for(let i = 0; i < v.length; i += 4) {
        parts.push(v.substr(i,4));
    }
    e.value = parts.join(' ');                     
}

function formatExp(e) {
    let v = e.value.replace(/\D/g, '');           
    if(v.length > 4) v = v.slice(0,4);            
    if(v.length >= 3) {
        e.value = v.slice(0,2) + '/' + v.slice(2);
    } else {
        e.value = v;
    }
}

document.getElementById("card").addEventListener('input', e => formatCard(e));
document.getElementById("exp").addEventListener('input', e => formatExp(e));

function sendDonate() {
    const player = document.getElementById("player").value;
    const rank = document.getElementById("rank").value;
    const method = document.getElementById("method").value;

    alert(`Оплата через ${method.toUpperCase()} прошла успешно!`);

    fetch(`http://127.0.0.1:8080/d?player=${encodeURIComponent(player)}&rank=${encodeURIComponent(rank)}`)
    .then(res => res.text())
    .then(() => {
        document.getElementById("donate-status").innerText = `Ранг ${rank} выдан игроку ${player}!`;
    })
    .catch(() => {
        document.getElementById("donate-status").innerText = `Ошибка при выдаче ранга.`;
    });
}

function sendSupport() {
    const player = document.getElementById("support-player").value;
    const amount = document.getElementById("amount").value;
    const method = document.getElementById("support-method").value;

    alert(`Пожертвование через ${method.toUpperCase()} успешно!`);

    fetch(`http://88.130.50.107:8080/d?player=${encodeURIComponent(player)}&rank=donater`)
    .then(res => res.text())
    .then(() => {
        document.getElementById("support-status").innerText = `Пожертвование ${amount} принято, ${player} получил Донатер!`;
    })
    .catch(() => {
        document.getElementById("support-status").innerText = `Ошибка при обработке пожертвования.`;
    });
}
