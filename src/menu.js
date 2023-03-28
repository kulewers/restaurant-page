import WildMushroomCreamSoup from './os_cream-od-wild-mushroom-and-os_istock-1267002729.jpg'
import FrenchOnionSoup from './french-onion-soup-1200-square-122.jpg'
import SoyMarinatedWagyuBeef from './soy-marinated-wagyu-with-coriander-relish-13318-1.jpg'


var items = [
  {
    name: "Wild Mushroom Cream Soup",
    description: "A variety of hand-picked mushrooms, cooked to perfection, mixed in with velvety cream and served with freshly chopped scallions",
    image_name: WildMushroomCreamSoup
  },
  {
    name: "French Onion Soup",
    description: "Slow simmered sweet onions, topped with savory Swiss Cheese and garnished with croutons",
    image_name: FrenchOnionSoup
  },
  {
    name: "Soy Marinated Wagyu Beef",
    description: "Elegantry marbled Japanese Wagyu beef fillet marinated in say sauce for 48 h. Tender and flavorful.",
    image_name: SoyMarinatedWagyuBeef
  }
]

function createMenu() {
  const main = document.createElement('main');

  const menu = document.createElement('ul');
  menu.classList.add('menu');

  items.forEach(function (item) {
    const menuItem = document.createElement('li')
    menuItem.classList.add('menu-item')
  
    const itemImage = document.createElement('img')
    itemImage.src = item.image_name
  
    menuItem.appendChild(itemImage)
  
    const itemInfo = document.createElement('div')
  
    const itemName = document.createElement('p')
    itemName.classList.add('item-name')
    itemName.innerHTML = item.name
    itemInfo.appendChild(itemName)
  
    const itemDesc = document.createElement('p')
    itemDesc.classList.add('item-desc')
    itemDesc.innerHTML = item.description
    itemInfo.appendChild(itemDesc)
  
    menuItem.appendChild(itemInfo)
  
    menu.appendChild(menuItem)
  })

  main.appendChild(menu);

  return main;
}

export default createMenu;