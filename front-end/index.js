// VARIABLES

const userDiv = document.querySelector('#users-div')
const charactersContainer = document.querySelector('#characters')
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
         `<div id="char-card">
            <p>Created by: ${char.user.name}</p>
            <ul id="char-list">
               <li>Name: ${char.name}</li>
               <li>Birthplace: ${char.birthplace}</li>
               <li>Bio: ${char.bio}</li>
               <li>Health Points: ${char.health_points}</li>
               <li>Attack Points: ${char.attack_points}</li>
               <li>Defense Points: ${char.defense_points}</li>
            </ul>
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


// **** login form event listener ****
loginForm.addEventListener('submit', function(event) {

   event.preventDefault()

   let input = event.target.name.value

   fetch("http://localhost:3000/users")
   .then(response => response.json())
   .then(allUsers => {
      // console.log(allUsers)
      // console.log(input)
      checkForUser(allUsers, input)
   })

   event.target.reset()
})