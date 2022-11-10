const placesLibrary = [
  ['Charlie', 'https://www.instagram.com/charlierestbar/'],
  ['Darling', 'https://www.instagram.com/darling.minsk/'],
  ['Wine & pinsa', 'https://www.instagram.com/winepinsa.bar/'],
  ['Maslow6', 'https://www.instagram.com/maslow6_minsk/'],
  ['Underdog', 'https://www.instagram.com/cafe5.minsk/'],
  ['Le gusse', 'https://www.instagram.com/legossecafe/'],
  ['Vershy', 'https://www.instagram.com/vershy.19/'],
  ['La Scala', 'https://www.instagram.com/lascalatrattoria/'],
  ['Imena', 'https://www.instagram.com/imena.minsk/'],
  ['Bloom', 'https://www.instagram.com/bloomeatery_minsk/'],
  ['Michale', 'https://www.instagram.com/michelcafe.minsk/'],
  ['Ronin', 'https://www.instagram.com/ronin.by/'],
  ['Marble', ''],
  ['Klaus', 'https://www.instagram.com/klaus.cafe/'],
  ['Pinsa Romano', 'https://www.instagram.com/pinsa.romana.by/'],
  ['Flow', 'https://www.instagram.com/flow.izakaybar/'],
  ['News cafe', 'https://www.instagram.com/news_cafe_minsk/'],
  ['Milano', 'https://www.instagram.com/milanocafe_minsk/'],
  ['Fiori', 'https://www.instagram.com/fiori.minsk/'],
]
const button = document.querySelector('.shuffle')
const displayTitle = document.querySelector('.display__title')
const displayLink = document.querySelector('.display__link')
let place = ''
const randomizer = () => {
  let index = Math.floor(Math.random() * placesLibrary.length)
  place = placesLibrary[index]
  return place
}

button.addEventListener('click', () => {
  randomizer()
  displayTitle.innerText = place[0]
  displayLink.innerHTML = `<a class="display__link" href="${place[1]}" target="_blank">Instagram</a>`
})
