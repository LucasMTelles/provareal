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

//seguidores
fetch('https://api.github.com/users/LucasMTelles/followers')
.then(response => response.json())
.then( data =>{
    //foto de perfil
    const imgs1 = document.querySelector(".fotoseguidor1")
    imgs1.src = data[0].avatar_url


    //nome
    document.querySelector(".nomeseguidor1").textContent = data[0].login

    console.log(data[0])

    //foto de perfil
    const imgs2 = document.querySelector(".fotoseguidor2")
    imgs2.src = data[1].avatar_url


    //nome
    document.querySelector(".nomeseguidor2").textContent = data[1].login

    console.log(data[1])
})
.catch(error => {
    console.log(error)
})