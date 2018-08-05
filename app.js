document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const xhr = new XMLHttpRequest();

  const number = document.getElementById('number').value;

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true)

  let output = '';

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      if(response.type === 'success') {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }



  xhr.send();

  e.preventDefault();
}