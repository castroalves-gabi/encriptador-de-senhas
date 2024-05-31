let masterKey = '';

function setMasterKey() {
    const newMasterKey = document.getElementById('master-key').value;
    if (!newMasterKey) {
        alert('Por favor, insira uma senha mestra.');
        return;
    }

    masterKey = newMasterKey;
    alert('Senha mestra definida com sucesso!');
}

function saveData() {
    const serviceName = document.getElementById('service-name').value;
    const email = document.getElementById('email').value;
    const encryptEmail = document.getElementById('encrypt-email').checked;
    const password = document.getElementById('password').value;

    if (!serviceName || !password) {
        alert('Nome do serviço e senha são obrigatórios.');
        return;
    }

    const encryptedPassword = CryptoJS.AES.encrypt(password, masterKey).toString();
    let encryptedEmail = email;
    if (encryptEmail) {
        encryptedEmail = CryptoJS.AES.encrypt(email, masterKey).toString();
    }

    const data = {
        serviceName,
        email: encryptedEmail,
        password: encryptedPassword
    };

    let storedData = JSON.parse(localStorage.getItem('passwords')) || [];
    storedData.push(data);
    localStorage.setItem('passwords', JSON.stringify(storedData));

    alert('Dados salvos com sucesso!');
}

function showData() {
    if (!masterKey) {
        alert('Por favor, defina uma senha mestra.');
        return;
    }

    const masterPassword = prompt('Insira a senha mestra:');
    if (masterPassword !== masterKey) {
        alert('Senha mestra incorreta.');
        return;
    }

    let storedData = JSON.parse(localStorage.getItem('passwords')) || [];
    const displayDiv = document.getElementById('data-display');
    displayDiv.innerHTML = '';

    storedData.forEach(item => {
        const decryptedPassword = CryptoJS.AES.decrypt(item.password, masterKey).toString(CryptoJS.enc.Utf8);
        let decryptedEmail = item.email;
        if (item.email !== '') {
            try {
                decryptedEmail = CryptoJS.AES.decrypt(item.email, masterKey).toString(CryptoJS.enc.Utf8);
            } catch (e) {
                decryptedEmail = item.email; // Caso o email não esteja criptografado
            }
        }

        displayDiv.innerHTML += `<p><strong>${item.serviceName}</strong><br>Email: ${decryptedEmail}<br>Senha: ${decryptedPassword}</p>`;
    });
}