const form = document.getElementById('formLogin');
form.addEventListener('submit', async (event) => {
    
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    const resposta = await fetch('/login', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({nome: nome, senha: senha})
    });

    const dados = await resposta.json();
    document.getElementById('mensagem').innerText = dados.mensagem;
});