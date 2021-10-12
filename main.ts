input.onButtonPressed(Button.A, function () {
    geluidAan = !(geluidAan)
})
let mijnWeerstand = 0
let geluidAan = false
geluidAan = true
basic.forever(function () {
    mijnWeerstand = pins.digitalReadPin(DigitalPin.P1)
    if (geluidAan == true) {
        if (mijnWeerstand > 400) {
            music.ringTone(mijnWeerstand)
        }
    } else {
        music.rest(music.beat(BeatFraction.Sixteenth))
    }
})
