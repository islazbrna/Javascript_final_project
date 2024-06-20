const menuTlacitko = document.querySelector('#menu-tlacitko')
menuTlacitko.addEventListener('click', () => {
    document.querySelector('#menu-polozky').classList.toggle('show')
    if(document.querySelector('#menu-polozky').className.includes('show')){
        document.querySelector('i').classList.add("fa-xmark")}
        else if (document.querySelector('#menu-polozky').className.includes('show')!==true)
            {document.querySelector('i').classList.remove("fa-xmark")
            document.querySelector('i').classList.add("fa-bars")
            //console.log(document.querySelector('i').className)
    }})

    console.log(document.querySelector('#menu-polozky').className)