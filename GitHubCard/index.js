/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//const axios = require('axios');
const githubData = axios.get('https://api.github.com/users/ikeman32')
    .then(response => {

        document.querySelector('.cards')
            .appendChild(myGithub(response.data));

        //console.log(response.data);

    });




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

//My solution that does not need the followers array
axios.get('https://api.github.com/users/ikeman32/followers')
    .then(response => {
        for (let i = 0; i < response.data.length; i++) {
            //response.data[i].login
            axios.get(`https://api.github.com/users/${response.data[i].login}`)
                .then(response => {

                    document.querySelector('.cards')
                        .appendChild(myGithub(response.data));

                    //console.log(response.data);

                });
        }

    });

//Solution that uses the followers array

// for (let i = 0; i < followersArray.length; i++) {
//     //response.data[i].login
//     axios.get(`https://api.github.com/users/${followersArray[i]}`)
//         .then(response => {

//             document.querySelector('.cards')
//                 .appendChild(myGithub(response.data));

//             //console.log(response.data);

//         });
// }





/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function myGithub(userData) {
    //create elements
    const
        newImg = document.createElement('img'),
        newCard = document.createElement('div'),
        newInfo = document.createElement('div'),
        newName = document.createElement('h3'),
        newUserName = document.createElement('p'),
        newLocation = document.createElement('p'),
        newProfile = document.createElement('p'),
        newAddress = document.createElement('a'),
        newFollowers = document.createElement('p'),
        newFollowing = document.createElement('p'),
        newBio = document.createElement('p');

    //create classes
    newCard.classList.add('card');
    newInfo.classList.add('card-info');
    newName.classList.add('name');
    newUserName.classList.add('username');

    //appendChild
    newCard.appendChild(newImg);
    newCard.appendChild(newInfo);

    newProfile.appendChild(newAddress);

    newInfo.appendChild(newName);
    newInfo.appendChild(newUserName);
    newInfo.appendChild(newLocation);
    newInfo.appendChild(newProfile);
    newInfo.appendChild(newAddress);
    newInfo.appendChild(newFollowers);
    newInfo.appendChild(newFollowing);
    newInfo.appendChild(newBio);

    //set data

    newName.textContent = userData.name;
    newImg.src = userData.avatar_url;
    newUserName.textContent = userData.login;
    newLocation.textContent = userData.location;
    newProfile.textContent = `Profile: ${userData.html_url}`;
    newAddress.href = userData.html_url;
    newFollowers.textContent = `Followers: ${userData.followers}`;
    newFollowing.textContent = `Following: ${userData.following}`;
    newBio.textContent = `Bio: ${userData.bio}`;

    return newCard;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/