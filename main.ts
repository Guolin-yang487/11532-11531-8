let line = 0
function turnLeft () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin7, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin8, 0)
}
function stop () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin7, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin8, 0)
}
function backward () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin7, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin8, 30)
}
function turnRight () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin7, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin8, 0)
}
function forward () {
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin3, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin4, 0)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin7, 30)
    mbitbot.move_motor_pin(mbitbot.MPin.Mpin8, 0)
}
basic.forever(function () {
    line = mbitbot.Me_Line_Follower_Sensor(mbitbot.Jpin.J3)
    basic.showNumber(line)
    if (line == 1) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
