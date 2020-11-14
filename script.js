const tabela = document.querySelector('#tabela');

const formNome = document.querySelector('input[name=nome]');
const formCargo = document.querySelector('input[name=cargo]');
const formTelefone = document.querySelector('input[name=telefone]');



function montarTabelaFuncionario(){

    const linha = document.createElement('tr');

    const colunaNome = document.createElement('td');
    colunaNome.textContent = (formNome.value);
    linha.appendChild(colunaNome);
    formNome.value='';

    const colunaCargo = document.createElement('td');
    colunaCargo.textContent = (formCargo.value);
    linha.appendChild(colunaCargo);
    formCargo.value='';

    const colunaTelefone = document.createElement('td');
    colunaTelefone.textContent = (formTelefone.value);
    linha.appendChild(colunaTelefone);
    formTelefone.value='';

    const colunaExcluir = document.createElement('td');
    const linkExcluir = document.createElement('h0');
    linkExcluir.textContent = ("Clique nos dados da linha para Excluir");
    colunaExcluir.appendChild(linkExcluir);
    linha.appendChild(colunaExcluir);

   const tabelaApaga = document.querySelector('table')
   tabelaApaga.addEventListener('click', function(e){
   e.target.parentNode.remove()
   })

    tabela.appendChild(linha);   
    
}





