while True:
    print("light Levels:" + input.light_level())
    if input.light_level() < 6:
        light.set_all(light.rgb(255,0,255))
    elif input.light_level() < 13:
        light.set_all(light.rgb (0,0,0))
    else:
        light.clear()
