var numbers = [
  '(297) 803-4994',
  '(893) 232-0319',
  '(330) 229-7452'
]


function createContacts() {
  const main = document.createElement('main');

  const phoneNumbers = document.createElement('ul');
  phoneNumbers.classList.add('phone-numbers');

  const phoneSectTitle = document.createElement('p')
  phoneSectTitle.textContent = "Contact us via phone"
  phoneSectTitle.classList.add('sect-title')

  phoneNumbers.appendChild(phoneSectTitle)

  numbers.forEach(function (number) {
    const telNumber = document.createElement('li')
    telNumber.classList.add('phone-number')
    telNumber.textContent = number

    phoneNumbers.appendChild(telNumber)
  })
  main.appendChild(phoneNumbers);

  const addressContaner = document.createElement('div')
  addressContaner.classList.add("address-contaier")

  const addressSectTitle = document.createElement('p')
  addressSectTitle.textContent = 'We are located at: '
  addressSectTitle.classList.add('sect-title')

  addressContaner.appendChild(addressSectTitle)

  const address = document.createElement('p')
  address.classList.add('address')
  address.textContent = '2617 Scenicview Drive Athens, TX 75751'

  addressContaner.appendChild(address)

  main.appendChild(addressContaner);


  return main;
}

export default createContacts;
