import throttle from 'loadash/throttle'
import debounce from 'loadash/debounce'

class StickyHeader{
    constructor(){
        this.siteHeader = document.querySelector(".site-header")
        this.pageSections = document.querySelectorAll(".page-section")
        this.browseHeight = window.innerHeight
        this.previousScrollY = window.scrollY
        this.events
    }

    events(){
        window.addEventListener("scroll",throttle(() => runOnScroll(), 200))
        window.addEventListener("resize",debounce (() => {
            this.browseHeight = window.innerHeight
        }, 333))
    }

    runOnScroll(){
        this.determineScrollDirection()


        if(window.scrollY > 60){
            this.siteHeader.classList.add("site-header--dark")
        }
        else{
            this.siteHeader.classList.remove("site-header--dark")
        }
        this.pageSections.forEach(el => this.calcSection(el))
    }

    determineScrollDirection(){
        if(window.scrollY > this.previousScrollY){
            this.scrollDirection = "up"
        }
        else{
            this.scrollDirection = "down"
        }
        this.previousScrollY = window.scrollY

    }




    calcSection(el){
        if(window.scrollY + this.browseHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight){
            let scrollPercent = el.getBoundingClientRect().y / this.browseHeight * 100
            if(scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == "down" || scrollPercent < 33 && this.scrollDirection == "up"){
                let matchingLink = el.getAttribute("data-matching-link")
                document.querySelectorAll('.primary-nav a:not(${matching-link})').forEach(el => el.classList.remove("is-current-link"))
                document.querySelector(matchingLink).classList.add("is-current-link")
            }
        }
    }
}


export default StickyHeader;