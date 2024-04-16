// document.addEventListener('DOMContentLoaded', function()
// {
//     document.getElementById('btn-buscar-cep').addEventListener('click', function(){
//         //AJAX - Asynchronous JavaScript and XML - surgiu para ter interessao entre back e front sem precisar 
//         //recarregar a página. 

//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;

//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint);
//         xhttp.send();
        
//     })
// })

$(document).ready(function(){
    $('#btn-buscar-cep').click(function(){
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        $.ajax(endpoint).done(function(resposta){
            console.log(resposta);

            const logradouro = resposta.logradouro;
            const localidade = resposta.localidade; 
            const uf = resposta.uf; 
            const bairro = resposta.bairro; 

            const endereco = `${logradouro}, ${bairro} - ${localidade} - ${uf}`;

            $('#endereco').val(endereco);
        })
    })
})