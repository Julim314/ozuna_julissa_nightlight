while (true) {
    console.log("light Levels:" + input.lightLevel())
    if (input.lightLevel() < 6) {
        light.setAll(light.rgb(255, 0, 255))
    } else if (input.lightLevel() < 13) {
        light.setAll(light.rgb(0, 0, 0))
    } else {
        light.clear()
    }
    
}
