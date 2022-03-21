import '../styles/styles.css'
import MobileMenu from './Modules/MobileMenu'
import RevealOnScroll from './Modules/RevealOnScroll'

if(module.hot){
    module.hot.accept()
}

new RevealOnScroll(document.querySelectorAll(".feature-item"),75)
new RevealOnScroll(document.querySelectorAll(".feature-item"),60)


let mobileMenu = new MobileMenu(); 


/* Code starts here */


