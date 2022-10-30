const placesLibrary = [
  'Charlie',
  'Darling',
  'Wine & pinsa',
  'Maslow6',
  'Underdog',
  'Le gusse',
  'Vershy',
  'La Scala',
  'Imena',
  'Bloom',
  'Michale',
  'Ronin',
  'Marble',
  'Klaus',
  'Pinsa Romano',
  'Flow',
  'News cafe',
  'Milano',
]
const button = document.querySelector('.shufle')
const display = document.querySelector('.display')
let place = ''
const randomizer = () => {
  let index = Math.floor(Math.random() * placesLibrary.length)
  place = placesLibrary[index]
  return place
}

button.addEventListener('click', () => {
  randomizer()
  display.innerText = place
})
