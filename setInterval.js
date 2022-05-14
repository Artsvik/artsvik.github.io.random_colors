let start_btn = document.getElementById("#start_btn")
let stop_btn = document.getElementById("#stop_btn")
let color_div = document.getElementsByClassName("color_div")

start_btn.addEventListener('click', () => {
    let colorInterval = setInterval(() => {
        let symbols = "0123456789ABCDEF"
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += symbols[Math.floor(Math.random() * 16)]

            color_div.style.background = color

        }
    }, 5000)
})

stop_btn.addEventListener('click', () => {
    clearInterval(colorInterval)
    color_div.style.background = "yellow"
})