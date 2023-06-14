const foto = document.querySelector("imagem")

fetch('https://api.github.com/users/LucasMTelles')
.then(response => response.json())
.then( data =>{
    document.querySelector('h1').textContent = data.name


    const img = document.querySelector(".foto")
    img.src = data.avatar_url

    document.querySelector(".nome").textContent = data.name
    
    document.querySelector(".bio").textContent = data.bio


    console.log(data)
})
.catch(error => {
    console.log(error)
})