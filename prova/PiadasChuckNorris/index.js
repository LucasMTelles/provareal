const btnCarregarPiada = document.querySelector('#carregarPiada')

btnCarregarPiada.addEventListener('click', ()=>{
  fetch('https://api.chucknorris.io/jokes/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.querySelector('#piada').textContent = data.value;
  })
  .catch(function(error) {
    console.log('Ocorreu um erro:', error);
  });
})