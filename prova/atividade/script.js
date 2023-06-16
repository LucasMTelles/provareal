const foto = document.querySelector("imagem")

fetch('https://api.github.com/users/LucasMTelles')
.then(response => response.json())
.then( data =>{
    //titulo
    document.querySelector('h1').textContent = data.name


    //foto de perfil
    const img = document.querySelector(".foto")
    img.src = data.avatar_url


    //nome e bio d usuário
    document.querySelector(".nome").textContent = data.name
    document.querySelector(".bio").textContent = data.bio


    //botões
    const btncurriculo = document.getElementById("curriculo")
    
    btncurriculo.addEventListener("click", botaocur)

    function botaocur(){
        window.location = "https://github.com/LucasMTelles/";
    }




    const btncontato = document.getElementById("contato")
    
    btncontato.addEventListener("click", botaocon)

    function botaocon(){
        window.location = "https://github.com/LucasMTelles/";
    }




    console.log(data)
})
.catch(error => {
    console.log(error)
})