const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // e.reset()
    const ourtext = document.getElementById('Text').value
    form.reset();
    const display = document.getElementById('intro').innerHTML = ourtext
  
})