input.onPinPressed(TouchPin.P0, function () {
    if (pins.digitalReadPin(DigitalPin.P0) == pins.digitalReadPin(DigitalPin.P0)) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (false) {
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else {
    	
    }
})
