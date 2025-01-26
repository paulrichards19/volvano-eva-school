dimming = 0

def on_button_pressed_a():
    global dimming
    for brightness in range(1024):
        control.wait_micros(3000)
        pins.analog_write_pin(AnalogPin.P0, brightness)
    control.wait_micros(2000000)
    dimming = 1023
    while dimming >= 0:
        control.wait_micros(3000)
        pins.analog_write_pin(AnalogPin.P0, dimming)
        dimming += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
