function createHeader() {
  const header = document.createElement('header');
    
  const headerContent = document.createElement('div');
  headerContent.classList.add('header-content');

  const title = document.createElement('h1');
  title.textContent = "Twisted Ocean Café";
  headerContent.appendChild(title);

  const nav = document.createElement('nav');

  const navLinkList = document.createElement('ul');

  const homeButton = document.createElement('li');
  homeButton.textContent = 'Home';
  homeButton.dataset.action = 'Home';
  navLinkList.appendChild(homeButton);

  const menuButton = document.createElement('li');
  menuButton.textContent = 'Menu';
  menuButton.dataset.action = 'Menu';
  navLinkList.appendChild(menuButton);

  const contactsButton = document.createElement('li');
  contactsButton.textContent = 'Contact us';
  contactsButton.dataset.action = 'Contacts';

  navLinkList.appendChild(contactsButton);

  nav.appendChild(navLinkList);

  headerContent.appendChild(nav);

  header.appendChild(headerContent);

  return header
}

export default createHeader;