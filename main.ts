let dimming = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    music.play(music.createSoundExpression(WaveShape.Square, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    for (let brightness = 0; brightness <= 1023; brightness++) {
        control.waitMicros(2000)
        pins.analogWritePin(AnalogPin.P0, brightness)
    }
    control.waitMicros(6000)
    dimming = 1023
    while (dimming >= 0) {
        control.waitMicros(2000)
        pins.analogWritePin(AnalogPin.P0, dimming)
        dimming += -1
    }
})
