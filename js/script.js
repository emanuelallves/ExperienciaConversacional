function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();

    if (message) {
        const chatBox = document.querySelector('.chat-box');
        const userMessage = document.createElement('div');
        userMessage.textContent = "Você: " + message;
        userMessage.style.textAlign = 'right';
        userMessage.style.color = '#ADD8E6';
        userMessage.style.fontSize = '16px';

        chatBox.appendChild(userMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
        input.value = '';
    }
}

const fakeUsers = [
    {
        name: "Barney",
        img: "assets/images/Barney.jpg",
    },
    {
        name: "Ted",
        img: "assets/images/Ted.jpg",
    },
    {
        name: "Lily",
        img: "assets/images/LilyAldrin.jpg",
    },
    {
        name: "Marshall",
        img: "assets/images/MarshallEriksen.jpg",
    },
    {
        name: "Robin",
        img: "assets/images/RobinScherbatsky.jpg",
    },
    {
        name: "Tracy",
        img: "assets/images/Tracy.jpg",
    },
    {
        name: "Victoria",
        img: "assets/images/Victoria.jpg",
    },
    {
        name: "Quinn",
        img: "assets/images/QuinnGarvey.jpg",
    }
];

const fakeMessages = [
    "Go FURIA!!!",
    "GG",
    "VAI FURIAAAAAA",
    "HOJE TEM AULA DO PROFESSOR",
    "Que clutch foi esse?!",
    "Hoje tem clutch do kascerato",
    "Qué ota?",
    "Olha a zika do GAU"
];

function sendFakeMessage() {
    const chatBox = document.querySelector('.chat-box');
    const botMessage = document.createElement('div');
    botMessage.classList.add('message'); // nova classe para estilizar depois

    const randomUserIndex = Math.floor(Math.random() * fakeUsers.length);
    const randomMessageIndex = Math.floor(Math.random() * fakeMessages.length);

    const user = fakeUsers[randomUserIndex];
    const message = fakeMessages[randomMessageIndex];

    botMessage.innerHTML = `
        <img class="profile-pic" src="${user.img}" alt="Foto de ${user.name}">
        <div class="message-content">
            <strong>${user.name}</strong>
            <p>${message}</p>
        </div>
    `;

    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}


setInterval(sendFakeMessage, 3000);
