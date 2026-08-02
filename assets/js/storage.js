/*so 1 - pegar lista de transações do localStorage
const listaSalva = localStorage.getItem("transacoes"); 
const lista = JSON.parse(listaSalva) || [];

// Passo 2 - criar objeto transação
const transacao = {
    category: "Mercado",
    value: 100,
    date: "2023-06-01",
    description: "Compra de alimentos",
    type: "Despesa",
    id: Date.now()
}
// Passo 3 - adicionar transação à lista
lista.push(transacao);

// Passo 4 - salvar lista atualizada no localStorage
localStorage.setItem("transacoes", JSON.stringify(lista));
*/
// função para adicionar transação ao localStorage
export function addTransaction(category, value, date, description, type) {
    const savedList = localStorage.getItem("transacoes");
    const list = JSON.parse(savedList) || [];
    const transaction = {
        category,
        value,
        date,
        description,
        type,
        id: Date.now()
    }
    list.push(transaction);
    localStorage.setItem("transacoes", JSON.stringify(list));
}
// função para obter lista de transações do localStorage
export function getTransactions() {
    const savedList = localStorage.getItem("transacoes");
    const list = JSON.parse(savedList) || [];
    return list;
}

