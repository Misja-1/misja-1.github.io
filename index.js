let light = true
function funcDark() {
  let buttonDarkmodeText = document.getElementById("buttonDarkmode");
  if (light) {
    light = false;
    const body = document.querySelector('.lightBody');
    body.classList.add('darkBody');
    body.classList.remove('lightBody');

    const top = document.querySelector('.lightTop');
    top.classList.add('darkTop');
    top.classList.remove('lightTop');

    const title = document.querySelector('.lightTitle');
    title.classList.add('darkTitle');
    title.classList.remove('lightTitle');

    const button = document.querySelector('.lightButton');
    button.classList.add('darkButton');
    button.classList.remove('lightButton');
    buttonDarkmodeText.innerHTML = "MOON";

    const rightside = document.querySelector('.lightRightside');
    rightside.classList.add('darkRightside');
    rightside.classList.remove('lightRightside');
  }
  else {
    light = true;
    const body = document.querySelector('.darkBody');
    body.classList.add('lightBody');
    body.classList.remove('darkBody');

    const top = document.querySelector('.darkTop');
    top.classList.add('lightTop');
    top.classList.remove('darkTop');

    const title = document.querySelector('.darkTitle');
    title.classList.add('lightTitle');
    title.classList.remove('darkTitle');

    const button = document.querySelector('.darkButton');
    button.classList.add('lightButton');
    button.classList.remove('darkButton');
    buttonDarkmodeText.innerHTML = "SUN";

    const rightside = document.querySelector('.darkRightside');
    rightside.classList.add('lightRightside');
    rightside.classList.remove('darkRightside');
  } 
}