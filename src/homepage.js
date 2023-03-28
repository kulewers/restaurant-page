function createHome() {
  const main = document.createElement('main');

  const heroText = document.createElement('div');
  heroText.classList.add('hero-text');

  const headline = document.createElement('h1');
  headline.textContent = "Because you're hungry";
  heroText.appendChild(headline);

  const sideText = document.createElement('p');
  sideText.textContent = 'We got you covered';
  heroText.appendChild(sideText);

  const seeMenuBtn = document.createElement('button');
  seeMenuBtn.textContent = 'See menu';
  seeMenuBtn.dataset.action = 'Menu'
  heroText.appendChild(seeMenuBtn);

  main.appendChild(heroText);

  return main;
}

export default createHome;