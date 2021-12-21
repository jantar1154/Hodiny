var $ = (select) => document.querySelector(select)
var format = (str) => {
    if (parseInt(str) < 10) {
        return '0' + str
    }
    return str
}

setInterval(() => {
    const date = new Date()
    $('.hours').textContent = format(date.getHours()) + ':'
    $('.minutes').textContent = format(date.getMinutes()) + ':'
    $('.seconds').textContent = format(date.getSeconds())
}, 20)

const bgColor = $('#bgclr')
const fontColor = $('#fontclr')
const range = $('#rng')
const imageUrl = $('#bgUrl')
const urlOrColorBg = $('#clrOrURl')
const outlineSize = $('#outlineSize')
const outlineColor = $('#outlineColor')

const clock = $('.clock')

range.addEventListener('input', () => {
    clock.style.fontSize = range.value + 'rem'
})

bgColor.addEventListener('input', () => {
    if (!urlOrColorBg.checked) {
        clock.style.background = bgColor.value
    }
})

fontColor.addEventListener('input', () => {
    clock.style.color = fontColor.value
})

urlOrColorBg.addEventListener('input', () => {
    if (urlOrColorBg.checked) {
        clock.style.background = 'url(' + imageUrl.value + ')'
        clock.style.backgroundRepeat = 'no-repeat'
        clock.style.backgroundSize = 'cover'
    } else {
        clock.style.background = bgColor.value
    }
})

outlineSize.addEventListener('input', () => {
    clock.style.webkitTextStrokeWidth = outlineSize.value + 'px'
})

outlineColor.addEventListener('input', () => {
    clock.style.webkitTextStrokeColor = outlineColor.value
})
