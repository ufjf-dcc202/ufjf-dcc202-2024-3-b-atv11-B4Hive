document.addEventListener('DOMContentLoaded', () => {
    const entrada = document.getElementById('entrada');
    const adicionarBtn = document.getElementById('adicionar');
    const limparBtn = document.getElementById('limpar');
    const itens = document.getElementById('itens');

    adicionarBtn.addEventListener('click', () => {
        const newItemText = entrada.innerText.trim();
        if (newItemText) {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;
            itens.appendChild(newItem);
            entrada.innerText = '';
        }
    });

    limparBtn.addEventListener('click', () => {
        itens.innerHTML = '';
    });
});