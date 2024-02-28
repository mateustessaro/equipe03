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
        const classificado = tabelaImc(imc)
        console.log(classificado)
        mostrarResultado(classificado)
    })
    function calcularImc(peso, altura){
        let imc = (peso / altura ** 2)
        return imc.toFixed(2);
    }
    function mostrarResultado(msg){
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = msg
    }
    function tabelaImc(imc){
        const classificado = [' você está abaixo do peso', ' Seu peso está normal', ' você está com sobrepso', ' Você está teta direita do luiz', 'Você está teta esquerda do luiz', 'Você está Luiz teta']
        if (imc >= 39.9) return classificado[5];
        if (imc >= 35) return classificado[4];
        if (imc >= 30) return classificado[3];
        if (imc >= 25)  return classificado[2];
        if (imc >= 18.5) return classificado[1];
        if (imc < 18.5)return classificado[0];
    
    }

        