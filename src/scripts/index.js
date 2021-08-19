let darkTheme = false;

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
})

window.onload = (e) => {
  darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (darkTheme)
    handleThemeChange()
  document.getElementsByName('theme-switcher')[0].addEventListener('click', () => {
    darkTheme = !darkTheme;
    handleThemeChange();
  })
}

function handleThemeChange() {
  if (darkTheme){
    document.head.insertAdjacentHTML('beforeend', '<link id="dark-theme-stylesheet" rel="stylesheet" href="css/dark.css">')
  } else {
    let elem = document.getElementById('dark-theme-stylesheet')
    if (elem)
      elem.remove()
  }
}
