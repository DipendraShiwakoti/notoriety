function changeColor() {
  var blueDiv = document.getElementById("changeable");
  blueDiv.text = "hello"
}

function replaceWord() {
  var wordable = document.getElementById('wordable');

  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "your-api-key-here",
      "x-rapidapi-host": "api-host-here",
    },
  })
    .then((response) => {
      console.log(response);
      response.json().then(() => {
        /* 
          Complete this handler function with code that populates an html 
          element with the random word 
        */
      });
    })
    .catch((err) => {
      console.error(err);
    });
}