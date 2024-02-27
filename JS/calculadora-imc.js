const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        const inputPeso = e.target.querySelector('#peso')
        const Peso = parseFloat(inputPeso.value)
        
        console.log(inputPeso)
        console.log(Peso)
        const inputAltura = e.target.querySelector('#altura')
        const Altura = parseFloat(inputAltura.value)
        
        console.log(inputAltura)
        console.log(Altura)
        const peso = Number(inputPeso.value)
        const altura = Number(inputAltura.value)

        const imc = calcularImc(peso, altura)
        console.log(imc)
    })
    function calcularImc(peso, altura){
        let imc = (peso / altura ** 2)
        return imc.toFixed(2);
    }

        