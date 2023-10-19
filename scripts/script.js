const navigationBar = document.querySelector('.main-navigation')
const navigationList = document.querySelector('.navigation-list')
const navigationLogo = navigationBar.querySelector('.navigation-logo img')
const navigationOpen = document.getElementById('menu-open')
const navigationClose = document.getElementById('menu-close')

window.onscroll = () => {
  if (
    document.body.scrollTop >= 80 ||
    document.documentElement.scrollTop >= 80
  ) {
    navigationBar.classList.add('scrolled')
  } else {
    navigationBar.classList.remove('scrolled')
  }
}

navigationOpen.onclick = () => {
  navigationList.classList.add('open')
}

navigationClose.onclick = () => {
  navigationList.classList.remove('open')
}
