import './style.css';
import createHome from './homepage';
import createHeader from './header';
import createMenu from './menu';
import createContacts from './contacts';

const content = document.querySelector('#content');
content.appendChild(createHeader());
createPage(createHome)

function createPage(pageFuncion) {
  const main = document.querySelector('main')
  if (main) {
    main.remove()
  }
  content.appendChild(pageFuncion());
  const redirects = document.querySelectorAll('[data-action]')
  redirects.forEach(redirect => redirect.removeEventListener)
  redirects.forEach(redirect =>
    redirect.addEventListener('click', function (e) {
      let navAction = e.target.dataset.action;
      createPage(navigation[navAction]);
    })
  )
}

var navigation = {
  Home: createHome,
  Menu: createMenu,
  Contacts: createContacts
}