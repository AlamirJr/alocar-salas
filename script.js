// Array para armazenar as salas cadastradas
let salas = [];

// Array para armazenar as alocações
let alocacoes = [];

// Função para atualizar a lista de salas e o dropdown
function atualizarSalas() {
    const listaSalas = document.getElementById('lista-salas');
    const selectSala = document.getElementById('sala');
    
    // Limpa as listas
    listaSalas.innerHTML = '';
    selectSala.innerHTML = '';

    // Adiciona cada sala cadastrada à lista e ao dropdown
    salas.forEach((sala, index) => {
        let li = document.createElement('li');
        li.textContent = `${sala.nome} (Capacidade: ${sala.capacidade}, Recursos: ${sala.recursos})`;
        listaSalas.appendChild(li);

        let option = document.createElement('option');
        option.value = index;
        option.textContent = sala.nome;
        selectSala.appendChild(option);
    });
}

// Função para atualizar a lista de alocações
function atualizarAlocacoes() {
    const listaAlocacoes = document.getElementById('lista-alocacoes');
    listaAlocacoes.innerHTML = '';

    alocacoes.forEach((alocacao) => {
        let li = document.createElement('li');
        li.textContent = `Sala: ${alocacao.salaNome} - Data: ${alocacao.data} - Hora: ${alocacao.hora}`;
        listaAlocacoes.appendChild(li);
    });
}

// Evento de cadastro de sala
document.getElementById('form-sala').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const capacidade = document.getElementById('capacidade').value;
    const recursos = document.getElementById('recursos').value;

    // Cadastra a sala
    salas.push({ nome, capacidade, recursos });

    // Atualiza a lista de salas
    atualizarSalas();

    // Limpa os campos do formulário
    this.reset();
});

// Evento de alocação de sala
document.getElementById('form-alocacao').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const salaSelecionada = document.getElementById('sala').value;

    // Armazena a alocação
    alocacoes.push({
        salaNome: salas[salaSelecionada].nome,
        data: data,
        hora: hora
    });

    // Atualiza a lista de alocações
    atualizarAlocacoes();

    alert(`Sala "${salas[salaSelecionada].nome}" alocada para ${data} às ${hora}`);
});
