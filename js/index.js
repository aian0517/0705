const nav = document.querySelector('nav')
const navtext = document.querySelector('.nav-text')
const nav_link = document.querySelectorAll('.nav-link')
// const navtext2 = document.querySelectorAll('.nav-ul>li>a')
// console.log(navtext2);
addEventListener('scroll', () => {
    const nowScroll = document.documentElement.scrollTop
    // console.log(nowScroll);
    if (nowScroll) {
        nav.classList.add('nav-hover')
        navtext.classList.remove('nav-text')
        nav_link.forEach(element => {
            element.style.color = "#000"
        })
        // navtext2.classList.add('nav-text3')
    } else {
        nav.classList.remove('nav-hover')
        navtext.classList.add('nav-text')
        nav_link.forEach(element =>{
            element.style.color = "#fff"
        })
        // navtext2.classList.remove('nav-text3')
    }
})