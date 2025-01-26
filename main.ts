let dimming = 0
input.onButtonPressed(Button.A, function () {
    for (let brightness = 0; brightness <= 1023; brightness++) {
        control.waitMicros(3000)
        pins.analogWritePin(AnalogPin.P0, brightness)
    }
    control.waitMicros(100000)
    dimming = 1023
    while (dimming >= 0) {
        control.waitMicros(3000)
        pins.analogWritePin(AnalogPin.P0, dimming)
        dimming += -1
    }
})
basic.forever(function () {
	
})
