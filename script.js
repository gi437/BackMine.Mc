function formatCard(e) {
    let v = e.value.replace(/\D/g, '');
    v = v.match(/.{1,4}/g)?.join(' ') || '';
    e.value = v;
}

function formatExp(e) {
    let v = e.value.replace(/\D/g, '');
    if(v.length >= 3) v = v.slice(0,2) + '/' + v.slice(2,4);
    e.value = v;
}

document.getElementById("card").addEventListener('input', e => formatCard(e));
document.getElementById("exp").addEventListener('input', e => formatExp(e));

function sendDonate() {
    const player = document.getElementById("player").value;
    const rank = document.getElementById("rank").value;
    const method = document.getElementById("method").value;

    // фейковая оплата
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

    fetch(`http://127.0.0.1:8080/d?player=${encodeURIComponent(player)}&rank=donater`)
    .then(res => res.text())
    .then(() => {
        document.getElementById("support-status").innerText = `Пожертвование ${amount} принято, ${player} получил Донатер!`;
    })
    .catch(() => {
        document.getElementById("support-status").innerText = `Ошибка при обработке пожертвования.`;
    });
}
