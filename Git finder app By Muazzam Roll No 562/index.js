console.log('welcome');


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }

  function getData(){

    var userName = document.querySelector('#userName').value;
var display = document.querySelector('#display');
    console.log("network testing");
    fetch(`https://api.github.com/users/${userName}`).then(function(response){
      return response.json()
    })
   .then(function (users){
   display.innerHTML=`
   <ul>
   
   <li>${users.name}</li>
   <li>
   ${users.id}
   </li>
   <li>
   ${users.public_repos}
   </li>
   </ul>
   `
   }).catch(function(err){
console.log("error");
   })

   caches.match(`https://api.github.com/users/${userName}`).then(function(response){

  if(!response){
    console.log("no data")
  }
  return response.json();
   })
   .then(function(data){
 console.log("data from cache",data);
   })
   .catch(function(){
console.log("Error");
   })
  }