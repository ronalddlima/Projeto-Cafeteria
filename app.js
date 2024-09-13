const form = document.querySelector('form')
form.addEventListener('submit', (event)=>{
    event.defaultPrevented()
    const busca = form.querySelector('input').value
    console.log('Voce pesquisou por', busca)
})