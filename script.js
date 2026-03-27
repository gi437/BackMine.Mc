function sendDonate() {
    const player = document.getElementById("player").value;
    const rank = document.getElementById("rank").value;

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

    // Для фейк-доната просто имитируем выдачу ранга "donater"
    fetch(`http://127.0.0.1:8080/d?player=${encodeURIComponent(player)}&rank=donater`)
    .then(res => res.text())
    .then(() => {
        document.getElementById("support-status").innerText = `Пожертвование ${amount} принято, ${player} получил Донатер!`;
    })
    .catch(() => {
        document.getElementById("support-status").innerText = `Ошибка при обработке пожертвования.`;
    });
}
