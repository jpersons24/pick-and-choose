// VARIABLES

const charactersContainer = document.querySelector('#character-container')
const loginForm = document.querySelector('#login-form')
const availItems = document.querySelector('#available-items')



// RENDER AND LOGIC FUNCTIONS

function renderAllChars(allChars) {
   allChars.forEach(char => {
      charactersContainer.innerHTML += 
         `<div class="char-card">
            <p class="char-name">${char.name}</p>
         </div>`
   })
}

function renderAllItems(allItems) {
   allItems.forEach(item => {
      availItems.innerHTML += 
         `<div class="item-card">
            <p>${item.name}</p>
         </div>`
   })
}


// NETWORK REQUESTS

function getAllCharacters() {
   fetch("http://localhost:3000/characters")
   .then(response => response.json())
   .then(allChars => {
      console.log('Got all the characters!')
      renderAllChars(allChars)
   })
}

function getAllItems() {
   fetch("http://localhost:3000/items")
   .then(response => response.json())
   .then(allItems => {
      // console.log(allItems)
      renderAllItems(allItems)
   })
}


// ** NETWORK REQUEST FUNCTION CALLS **
      getAllCharacters()
      getAllItems()




// EVENT LISTENERS


// charactersContainer.addEventListener('click', function(event){
//    // console.log(event.target)
//    // console.log(event.target.closest('div.char-card'))

//    if(event.target.matches('p.char-name')) {
//       // console.log(event.target)
//       // console.log(event.target.closest('div.char-card'))
//       let charCard = event.target.closest('div.chard-card')
//       charCard.innerHTML += 
         
//    }
// })


// **** login form event listener ****
// loginForm.addEventListener('submit', function(event) {

//    event.preventDefault()

//    let input = event.target.name.value

//    fetch("http://localhost:3000/users")
//    .then(response => response.json())
//    .then(allUsers => {
//       // console.log(allUsers)
//       // console.log(input)
//       checkForUser(allUsers, input)
//    })

//    event.target.reset()
// })