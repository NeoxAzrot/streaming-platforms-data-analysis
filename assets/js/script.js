// Variables en global
// Pour les nombres de films
const netflixMovies = []
const huluMovies = []
const prime_videoMovies = []
const disneyMovies = []
const numberOfMovies = [
  ['Netflix', netflixMovies],
  ['Hulu', huluMovies],
  ['Prime Video', prime_videoMovies],
  ['Disney+', disneyMovies]
]

// Pour géolocaliser
const dataCountry = [
  ['Pays', 'Nombre de programmes']
]
const netflixCountry = []
let netflixCountryCount = {}
const huluCountry = []
let huluCountryCount = {}
const prime_videoCountry = []
let prime_videoCountryCount = {}
const disneyCountry = []
let disneyCountryCount = {}

// Pour les genres
const dataGenre = [
  ["Platforme de streaming", "Nombre de genres de films", { role: "style" } ]
]
const netflixGenre = []
let netflixGenreCount = {}
const huluGenre = []
let huluGenreCount = {}
const prime_videoGenre = []
let prime_videoGenreCount = {}
const disneyGenre = []
let disneyGenreCount = {}

$.getJSON( "assets/data/streaming-platforms.json", ( data ) => {
  // On réalise toutes les tâches dans une seule boucle de données pour diminuer le temps de traitement
  $.each( data, function( key, val ) {
    // Pour les nombres de films
    if(val.netflix) {
      netflixMovies.push(val)
    }
    if(val.hulu) {
      huluMovies.push(val)
    }
    if(val.prime_video) {
      prime_videoMovies.push(val)
    }
    if(val.disney) {
      disneyMovies.push(val)
    }

    // Pour géolocaliser
    if(val.netflix) {
      let arrayCountry = val.country.split(',')
      countryFunction(netflixCountry, arrayCountry)
    }
    if(val.hulu) {
      let arrayCountry = val.country.split(',')
      countryFunction(huluCountry, arrayCountry)
    }
    if(val.prime_video) {
      let arrayCountry = val.country.split(',')
      countryFunction(prime_videoCountry, arrayCountry)
    }
    if(val.disney) {
      let arrayCountry = val.country.split(',')
      countryFunction(disneyCountry, arrayCountry)
    }

    // Pour les genres
    if(val.netflix) {
      let arrayGenre = val.genres.split(',')
      genreFunction(netflixGenre, arrayGenre)
    }
    if(val.hulu) {
      let arrayGenre = val.genres.split(',')
      genreFunction(huluGenre, arrayGenre)
    }
    if(val.prime_video) {
      let arrayGenre = val.genres.split(',')
      genreFunction(prime_videoGenre, arrayGenre)
    }
    if(val.disney) {
      let arrayGenre = val.genres.split(',')
      genreFunction(disneyGenre, arrayGenre)
    }
  })

  // Pour le nombre de statistique
  $('#numberOfData').text(data.length)

  // Pour géolocaliser
  countStats(netflixCountryCount, netflixCountry)
  countStats(huluCountryCount, huluCountry)
  countStats(prime_videoCountryCount, prime_videoCountry)
  countStats(disneyCountryCount, disneyCountry)

  netflixCountryCount = dataCountry.concat(Object.entries(netflixCountryCount))
  huluCountryCount = dataCountry.concat(Object.entries(huluCountryCount))
  prime_videoCountryCount = dataCountry.concat(Object.entries(prime_videoCountryCount))
  disneyCountryCount = dataCountry.concat(Object.entries(disneyCountryCount))

  // Pour les genres
  countStats(netflixGenreCount, netflixGenre)
  countStats(huluGenreCount, huluGenre)
  countStats(prime_videoGenreCount, prime_videoGenre)
  countStats(disneyGenreCount, disneyGenre)

  netflixGenreCount = dataGenre.concat(Object.entries(netflixGenreCount))
  huluGenreCount = dataGenre.concat(Object.entries(huluGenreCount))
  prime_videoGenreCount = dataGenre.concat(Object.entries(prime_videoGenreCount))
  disneyGenreCount = dataGenre.concat(Object.entries(disneyGenreCount))

  addColors(netflixGenreCount, '#5465FF')
  addColors(huluGenreCount, '#788BFF')
  addColors(prime_videoGenreCount, '#9BB1FF')
  addColors(disneyGenreCount, '#BFD7FF')

  console.log(netflixGenreCount)

  // Pour afficher les statistiques
  showStats()
})

const countryFunction = (variable, arrayCountry) => {
  if(arrayCountry == '') return // Pour pas avoir des pays vides
  for (let i = 0; i < arrayCountry.length; i++) {
    variable.push(arrayCountry[i])
  }
}

const genreFunction = (variable, arrayGenre) => {
  if(arrayGenre == '') return // Pour pas avoir des genres vides
  for (let i = 0; i < arrayGenre.length; i++) {
    variable.push(arrayGenre[i])
  }
}

const countStats = (countObject, arrayCountry) => {
  arrayCountry.forEach(function(x) { countObject[x] = (countObject[x] || 0)+1; })
}

const addColors = (array, color) => {
  for (let i = 1; i < array.length; i++) { // On met pas de couleur pour la premier qui est le head du tableau
    array[i].push(color)
  }
}