// VARIABLES

const charactersContainer = document.querySelector('#character-container')
const loginForm = document.querySelector('#login-form')



// RENDER AND LOGIC FUNCTIONS

// function getSingleUser(allUsers) {
//    allUsers.forEach(user => {
//       userDiv.innerHTML += 
//          `<div id="user-card" data-id="${user.id}">
//             <p>${user.name}</p>
//          </div>`
//    })
// }

function renderAllChars(allChars) {
   allChars.forEach(char => {
      charactersContainer.innerHTML += 
         `<div class="char-card">
            <p class="char-name">${char.name}</p>
         </div>`
   })
}

// **** login form handler ****
// function checkForUser(allUsers, input) {
//    allUsers.forEach(user => {
      
//    })
// }



// NETWORK REQUESTS


function getAllCharacters() {
   fetch("http://localhost:3000/characters")
   .then(response => response.json())
   .then(allChars => {
      console.log('Got all the characters!')
      renderAllChars(allChars)
   })
}


// ** NETWORK REQUEST FUNCTION CALLS **
      getAllCharacters()




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