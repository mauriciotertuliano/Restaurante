let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

function redirecionar(botao, pagina) {
    window.location.href = pagina;
}

            //funçao de pagamento
    // Função para lidar com o pagamento
function fazerPagamento(formaDePagamento) {
    // Aqui você pode adicionar a lógica real de pagamento, como enviar os detalhes para o servidor.
    // Neste exemplo, apenas exibiremos uma mensagem no console.
    console.log(`Pagamento realizado com ${formaDePagamento}.`);
}

// Adicione um evento de clique a cada botão
const pixButton = document.getElementById('pixButton');
const cardButton = document.getElementById('cardButton');
const cashButton = document.getElementById('cashButton');

pixButton.addEventListener('click', function() {
    fazerPagamento('PIX');
});

cardButton.addEventListener('click', function() {
    fazerPagamento('Cartão');
});

cashButton.addEventListener('click', function() {
    fazerPagamento('Dinheiro');
    //pedido
    function adicionarItem(tipo) {
        var listaPedido = document.getElementById("pedido");
        var select = document.getElementById(tipo);
        var selectedItem = select.options[select.selectedIndex].value;
        var novoItem = document.createElement("li");
        novoItem.textContent = selectedItem;
        listaPedido.appendChild(novoItem);
    }
});
//Envia pedido ao servidor

        document.addEventListener("DOMContentLoaded", function() {
            const pedidoForm = document.getElementById("pedidoForm");

            pedidoForm.addEventListener("submit", function(event) {
                event.preventDefault();

                const formData = new FormData(pedidoForm);

                // Aqui, você pode enviar os dados do pedido para o servidor ou realizar qualquer ação necessária
                console.log("Pedido de Restaurante enviado:");
                for (let [key, value] of formData.entries()) {
                    console.log(key + ": " + value);
                }

                // Limpar o formulário após o envio
                pedidoForm.reset();
            });
        });
