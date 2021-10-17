// declaration of the variables
const progressbar = document.querySelector(".progress-bar--content")
const percentageTag = document.querySelector(".percentage")
const title = document.querySelector(".title")

let percentage = 0
const progression = [2, 5, 7, 8, 9, 10]

const progress = function() {
    const pas = progression[Math.floor(Math.random() * progression.length)]

    percentage += pas

    if (percentage > 100)
        percentage = 100

    percentageTag.innerText = `${percentage}%`
    progressbar.style.width = `${percentage}%`
}

setInterval(() => {
    if (percentage < 100) {
        progress()
    } else {
        title.innerText = "File Uploaded"
        console.log(percentage)
    }
}, 1000)