document.addEventListener('DOMContentLoaded', function () {
    const loadImageButton = document.querySelector('#loadImages');
    const imageContainer = document.querySelector('#imageContainer');
  
    loadImageButton.addEventListener('click', function () {
      const query = 'image';
      const apiKey = 'nzcDLmxQHIun2Du89vogyENrtqimj3JMHpMs9wN6aZvN1nQL4H8xGfMo';
      const url = `https://api.pexels.com/v1/search?query=${query}`;
  
      getImages(url, imageContainer);
    });
  });
  
  async function getImages(url, container) {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: 'Bearer nzcDLmxQHIun2Du89vogyENrtqimj3JMHpMs9wN6aZvN1nQL4H8xGfMo'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      const images = data.photos;
  
      let htmlListContent = '';
  
      images.forEach((image) => {
        htmlListContent += `<div class="card" style="width: 18rem;">
          <img src="${image.src.medium}" class="card-img-top" alt="${image.photographer}">
          <div class="card-body">
            <h5 class="card-title">${image.photographer}</h5>
            <p class="card-text">${image.url}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;
      });
  
      container.innerHTML = htmlListContent;
    } catch (error) {
      console.error(error);
    }
  }
  