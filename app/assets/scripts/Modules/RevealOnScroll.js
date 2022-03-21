import throttle from 'loadash/throttle'
import debounce from 'loadash/debounce'

class RevealOnScroll{
    constructor(els, thresholdPercent){
        this.thresholdPercent = thresholdPercent
        this.itemsToReveal = els
        this.browserHeight = window.innerHeight
        this.hideInitially()
        this.scrollThrottle = throttle(this.caclCaller, 200).bind(this)
        this.events()
    }

    events(){
        window.addEventListener("scroll",this.scrollThrottle)
        window.addEventListener("resize",debounce(()=>{
            console.log("Resize just ran")
            this.browserHeight = window.innerHeight
        }, 333))
    }

    caclCaller(){
        console.log("Scroll function ran")
        this.itemsToReveal.forEach(el => {
            if(el.isRevealed == false){
                this.CalculateIfScrolledTo(el)
        
        })
    }

    CalculateIfScrolledTo(el){
        if(window.scrollY + window.browserHeight > el.offsetTop){
        console.log("Element was calculated")
        let ScrollPerent = (el.getBoundingClientRect().top/window.browserHeight)*100
        if(ScrollPerent<this.thresholdPercent){
            el.classList.add("reveal-item--is-visible")
            el.isRevealed = true
            if(el.isLastItem == true){
                window.removeEventListener("scroll",this.scrollThrottle)
            }
        }
        }
    }

    hideInitially(){
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item")
            el.isRevealed = false
        })
        this.itemsToReveal[this.itemsToReveal.length-1].isLastItem = true
    }
    
}

export default RevealOnScroll;