// importação da funções do arquivo storage.js
import {addTransaction, getTransactions} from "./storage.js";


// elementos do DOM
const modal = document.getElementById("modalTransacao");
const btnAddTransaction = document.getElementById("btnAddTransacao");
const form = document.getElementById("formTransacao");
const closeModal = document.getElementById("btnFecharModal");
const transactionTable = document.getElementById("quadroTransação");


// função para renderizar as transações na tabela
function renderTransactions() {
    transactionTable.innerHTML = "";
    const transactions = getTransactions();
    transactions.forEach((transaction) => {
        const classValue = transaction.type === "Despesa" ? "valor" : "valor-entrada";
        const formattedValue = transaction.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        const html = `
            <div class="transações-item">
                <div>
                    <p>${transaction.category}</p>
                    <p class="info">${transaction.description} - ${transaction.date}</p>
                </div>
                <p class="${classValue}">${formattedValue}</p>
            </div>
`;
    transactionTable.innerHTML += html;
});
}
// chamando a função para renderizar as transações na tabela ao carregar a página
renderTransactions();


// função para abrir o modal de transação
btnAddTransaction.addEventListener("click", () => {
    modal.style.display = "flex";
})

// função para prevenir o envio do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = document.getElementById("tipo").value;
    const category = document.getElementById("categoria").value;
    const description = document.getElementById("descricao").value;
    const value = parseFloat(document.getElementById("valor").value);
    const date = document.getElementById("data").value;
    addTransaction(category, value, date, description, type);
    renderTransactions();
    modal.style.display = "none";
    form.reset();
});

// função para fechar o modal de transação
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    form.reset();
});
