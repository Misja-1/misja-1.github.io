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

    document.getElementById("icon").src="images/darkIcon.png";

    document.getElementById("faviconLink").href="images/darkFavicon.png";

    const title = document.querySelector('.lightTitle');
    title.classList.add('darkTitle');
    title.classList.remove('lightTitle');

    const button = document.querySelector('.lightButton');
    button.classList.add('darkButton');
    button.classList.remove('lightButton');
    buttonDarkmodeText.innerHTML = "MOON";

    document.getElementById("light-darkmode").src="images/darkmode.png";
    const modepng = document.querySelector('.lightmodepng');
    modepng.classList.add('darkmodepng');
    modepng.classList.remove('lightmodepng');

    const modeDiv = document.querySelector('.lightmodeDiv');
    modeDiv.classList.add('darkmodeDiv');
    modeDiv.classList.remove('lightmodeDiv');

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

    document.getElementById("icon").src="images/lightIcon.png";

    document.getElementById("faviconLink").href="images/lightFavicon.png";

    const title = document.querySelector('.darkTitle');
    title.classList.add('lightTitle');
    title.classList.remove('darkTitle');

    const button = document.querySelector('.darkButton');
    button.classList.add('lightButton');
    button.classList.remove('darkButton');
    button.innerHTML = "SUN";

    document.getElementById("light-darkmode").src="images/lightmode.png";
    const modepng = document.querySelector('.darkmodepng');
    modepng.classList.add('lightmodepng');
    modepng.classList.remove('darkmodepng');

    const modeDiv = document.querySelector('.darkmodeDiv');
    modeDiv.classList.add('lightmodeDiv');
    modeDiv.classList.remove('darkmodeDiv');

    const rightside = document.querySelector('.darkRightside');
    rightside.classList.add('lightRightside');
    rightside.classList.remove('darkRightside');
  } 
}