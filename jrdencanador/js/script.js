// Script para abrir a janela de agendamento
// document.getElementById('agendar-btn').addEventListener('click', function() {
//     alert('Obrigado por agendar conosco! Entraremos em contato em breve.');
// });

// // Validação simples de formulário de contato
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     if (name && email && message) {
//         alert('Formulário enviado com sucesso! Obrigado pelo seu contato.');
//     } else {
//         alert('Por favor, preencha todos os campos.');
//     }
// });


// Adicionar evento de envio ao formulário
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita o envio padrão do formulário
    
//     // Pegar os valores dos campos do formulário
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Verificar se todos os campos estão preenchidos
//     if (name && email && message) {
//         // Configurar os parâmetros para enviar com EmailJS
//         const params = {
//             name: name,
//             email: email,
//             message: message
//         };

//         // Usar EmailJS para enviar o e-mail
//         emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", params)
//         .then(function(response) {
//             alert('E-mail enviado com sucesso! Obrigado pelo contato.');
//             // Limpar o formulário após envio
//             document.getElementById('contact-form').reset();
//         }, function(error) {
//             alert('Erro ao enviar o e-mail. Tente novamente mais tarde.');
//             console.error('Erro ao enviar o e-mail:', error);
//         });
//     } else {
//         alert('Por favor, preencha todos os campos.');
//     }
// });


