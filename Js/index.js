function getGiphyData() {
    //Get giphy data
    var searchTerm = document.querySelector("#search").value;
    var url =
      "https://api.giphy.com/v1/gifs/search?api_key=wOkuLOpg0lyr0TN1NMtr0qIAsJpFW7rn&q=" +
      searchTerm;
  
    fetch(url)
      .then(data => data.json())
      .then(res => {
        console.log(res);
  
        var arrayOfGifs = res.data;
        var rand = Math.floor(Math.random() * arrayOfGifs.length);
        var firstItem = arrayOfGifs[rand];
        var giphyLink = firstItem.images.fixed_width.url;
        //makes giphy appear on page
        document.querySelector("#gif").setAttribute("src", giphyLink);
      })
      .catch(error => console.log(error));
  }
  
  function getTrendingData() {
    var url =
      "https://api.giphy.com/v1/gifs/trending?api_key=wOkuLOpg0lyr0TN1NMtr0qIAsJpFW7rn&q";
  
    fetch(url)
      .then(data => data.json())
      .then(res => {
        console.log(res);
        var _outputHTML = ""
        var _tenGifs = document.getElementById("tenGifs");
      //  document.querySelector("#gif1").setAttribute("src", giphyLink);
        if (res.data.length < 10) return; // if not ten quit for now
        for(let i=0; i< 10 ;i++) {
          // add 10 gifs by appending new elements to the div #tenGifs
          var node = document.getElementById("gif~"+i);      
          node.setAttribute("src", res.data[i].images.fixed_width.url);
          _tenGifs.appendChild(node);  
          
        }
        
        
      });
  }
  
  function setFavorite(imgId) {
    // save favorite for later
  }
  
