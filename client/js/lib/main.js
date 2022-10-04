const campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

const tabela = document.querySelector('#tabela');

const formulario = document.querySelector('.form');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    var tr = document.createElement('tr')

    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td)
    })

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tabela.appendChild(tr)

    formulario.reset();
    campos[0].focus()
});

console.log('opa')