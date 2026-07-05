input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(stunde)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showNumber(minute)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let minute = 0
let stunde = 0
stunde = -1
minute = -1
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Purple))
loops.everyInterval(1000, function () {
    strip.setPixelColor(minute, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    minute += 1
    if (minute == 30) {
        minute = 0
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    }
})
loops.everyInterval(60000, function () {
    stunde += 1
    if (stunde == 12) {
        stunde = 0
    }
})
