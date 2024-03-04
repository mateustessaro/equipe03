let imagens = [];

function carregarImagem(){
    const galeria = document.getElementById("galeria");
    console.log(galeria)
    galeria.innerHTML = ''

    imagens.forEach(imgURL=>{
        const img = document.createElement("img");
        img.src = imgURL;
        galeria.appendChild(img)
    })
}

document.getElementById('arquivos').addEventListener('change', function(event){
    const arquivo = event.target.files[0];
    const ler = new FileReader();

    ler.onload = function(e){
        const imgURL = e.target.result;
        imagens.push(imgURL);
        carregarImagem();
    };

    ler.readAsDataURL(arquivo)
});