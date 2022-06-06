const btn = document.getElementById('btn')
const list = document.querySelector('.list')

const chuck = async () => {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const chuck = await res.json()
    return renderChuck(chuck)
  } catch (error) {
    console.log(error);
  }
}

const renderChuck = (dataChuck) => {
  list.innerHTML = ''
  const li = document.createElement('div');
  li.classList.add('li')
  li.innerHTML = dataChuck.value
  
  const img = document.createElement('img')
  img.alt = '#disabled'
  img.src = dataChuck.icon_url
  list.append(li, img)
}

btn.addEventListener('click', () => {
  chuck()
})

