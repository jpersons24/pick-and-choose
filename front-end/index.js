// VARIABLES

const usersContainer = document.querySelector('#users-div')
const charactersContainer = document.querySelector('#characters')


// RENDER FUNCTIONS

function getSingleUser(allUsers) {
   allUsers.forEach(user => {
      usersContainer.innerHTML += 
         `<div id="user-card" data-id="${user.id}">
            <p>${user.name}</p>
         </div>`
   })
}

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



// NETWORK REQUESTS

function getAllUsers() {
   fetch("http://localhost:3000/users")
   .then(response => response.json())
   .then(allUsers => {
      console.log('Got all the users!')
      getSingleUser(allUsers)
   })
}

function getAllCharacters() {
   fetch("http://localhost:3000/characters")
   .then(response => response.json())
   .then(allChars => {
      console.log('Got all the characters!')
      renderAllChars(allChars)
   })
}


      // NETWORK REQUEST FUNCTION CALLS
      getAllUsers()
      getAllCharacters()