// script.js

// Carrinho de Compras
let carrinho = [];

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nome, preco) {
    const produto = { nome, preco };
    carrinho.push(produto);
    atualizarCarrinho();
    alert(`${nome} adicionado ao carrinho!`);
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const carrinhoContainer = document.getElementById('carrinho-container');
    if (!carrinhoContainer) return; // Se a seção do carrinho não existir, não faz nada

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    let html = '<ul>';
    let total = 0;
    carrinho.forEach(item => {
        html += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
        total += item.preco;
    });
    html += `</ul><p>Total: R$ ${total.toFixed(2)}</p>`;
    carrinhoContainer.innerHTML = html;
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }

    // Aqui você pode integrar com um sistema de pagamento
    alert('Compra finalizada com sucesso! Obrigado por comprar na MG Doces.');
    carrinho = [];
    atualizarCarrinho();
}

// Função para enviar o formulário de contato
function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Simulação de envio
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
    
    // Limpar o formulário
    document.getElementById('form-contato').reset();
    
    return false; // Impede o envio real do formulário
}

// Atualizar o carrinho na página inicial se existir
document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrinho();
});
