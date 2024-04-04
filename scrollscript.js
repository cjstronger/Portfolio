let sections = document.querySelectorAll('section')
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY
        let offSet = section.offsetTop - 150
        let height = section.offsetHeight
    if(top >= offset && top < offset + height){
        section.classList.add('show-animate')
    } else{
        section.classList.remove('show-animate')
    }
    })
}
