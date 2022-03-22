import '../styles/styles.css'
import MobileMenu from './Modules/MobileMenu'
import RevealOnScroll from './Modules/RevealOnScroll'
import StickyHeader from './Modules/StickyHeader'
import Modal from './Modules/modal'

if(module.hot){
    module.hot.accept()
}

new Modal()
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"),75)
new RevealOnScroll(document.querySelectorAll(".feature-item"),60)
new MobileMenu(); 
let modal

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if (typeof modal == "undefined") {
            import('./modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log("There was a problem."))
        }
        else{
            modal.openTheModal()
        }
    })
})

/* Code starts here */


