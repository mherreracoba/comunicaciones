const app= document.getElementById('root') //TODA LA ETIQUETA ROOT DEL CSS
const logo= document.createElement('img') //HIJITOS POR PELICULA
const container= document.createElement('div')
container.setAttribute('class', 'container')
logo.src='logo.jpg'

// COINATRIBUTO AL DIV CLASE Y CONTANINER
app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload=function() {
var data = JSON.parse(this.response)
//.forEach(movie=> {
//console.log(movie.title)
//})
data.forEach(movie=> {
    const card =document.createElement('div')
    card.setAttribute('class', 'card')
    const h1= document.createElement('h1')
    h1.textContent=movie.title
    const p=document.createElement('p')
    movie.description=movie.description.substring(0, 300) // Limit to 300 chars
    p.textContent=`${movie.description}...`
    container.appendChild(card)
    card.appendChild(h1)
    card.appendChild(p)
    })

}
request.send()


