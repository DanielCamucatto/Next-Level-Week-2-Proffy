// procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField);

//quando clicar no botão

// executar uma ação 
function cloneField(){
    //duplicar os campos
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
    //limpar os campos, que campos?
    const fields = newFieldsContainer.querySelectorAll('input')
    //para cada campo limpar
    fields.forEach(function(field){
        field.value=""
    })
        //pegar o field do momento
    //colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
    