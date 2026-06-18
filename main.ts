input.onPinPressed(TouchPin.P0, function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
    if (!(pins.digitalReadPin(DigitalPin.P0) == 1)) {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
basic.forever(function () {
	
})
