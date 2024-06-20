const menuTlacitko = document.querySelector('#menu-tlacitko')
const ikona = document.querySelector('i')
const menuPolozky = document.querySelector('#menu-polozky')

menuTlacitko.addEventListener('click', () => {
    menuPolozky.classList.toggle('show')
    if(document.querySelector('#menu-polozky').className.includes('show')){
        ikona.classList.add("fa-xmark")}
        else if (menuPolozky.className.includes('show')!==true)
            {ikona.classList.remove("fa-xmark")
            ikona.classList.add("fa-bars")
    }})