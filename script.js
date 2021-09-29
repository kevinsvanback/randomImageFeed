const container = document.querySelector('.container')

// Webpage that gives you an image depending on the image size input after the URL
const unsplashURL = 'https://source.unsplash.com/random/'

// Amout of rows on the page
const rows = 10

// Create images depending on the maximum amount of rows set
for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img')
  img.src = `${unsplashURL}${getRandomSize()}`
  container.appendChild(img)
}

// Get a random image size
function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}

// Get a random number between 300-399
function getRandomNr() {
  return Math.floor(Math.random() * 99) + 300;
}