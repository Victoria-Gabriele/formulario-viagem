document.addEventListener('DOMContentLoaded',()=>{
    const reserva = document.getElementById('reserva');
    reserva.addEventListener('submit', async(event) =>{
        event.preventDefault();
    
        const nome = document.getElementById('nome').value;
        const data = document.getElementById('data').value;
        const viagem = document.getElementById('viagem').value;
        const resultDiv = document.getElementById('mensagem');
        const mensagem = `
        <p> Nome: ${nome}</p>
        <p> Local: ${viagem}</p>
        <p> Data: ${data}</p> 
        `
        resultDiv.innerHTML = 'Enviando Dados...';

        try {
            //Simula uma chamada de AP para enviar os dados
            await fakeApiCall ({nome, data, viagem});
            resultDiv.innerHTML =`${mensagem}`;
            } catch (error) {
            resultDiv.innerHTML = `Erro: $(error.message)`;
        }
    });
    //Função para simular uma chamada de API
    function fakeApiCall(retorno) {
        return new Promise((resolve, reject) => {
            setTimeout (() => {
                if (retorno.nome && retorno.data && retorno.viagem) {
                    resolve('Dados enviados');
                } else {
                    reject(new Error('Dados inválidos'));
                }
            }, 4000);
    });
    }
    });