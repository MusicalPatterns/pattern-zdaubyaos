enum YaosBlockStrategy {
    INAIDJIYAIOUZD = 'inaidjiyaiouzd',
    UMOWCHUWOWIEST = 'umowchuwowiest',
}

enum YaosBlockResolution {
    HIGHREG = 'highregular',
    LOWREG = 'lowregular',
    MIDIRREG = 'midirregular',
}

enum YaosBlockStyle {
    OUZD = 'ouzd',
    INAI = 'inai',
    DJIYAI = 'djiyai',
    IEST = 'iest',
    UMOW = 'umow',
    CHUWOW = 'chuwow',
}

enum ZdaubBlockStyle {
    NODLE = 'nodle',
    LIMIN = 'limin',
    SCEND = 'scend',
}

enum BarDuration {
    FIFTEEN = 'fifteen',
    TWENTYFOUR = 'twentyfour',
}

enum YaosRendering {
    SPRING = 'spring',
    SUMMER = 'summer',
    FALL = 'fall',
    SUMMERY_SPRING = 'summerySpring',
    SPRINGY_SUMMER = 'springySummer',
}

enum ZdaubRendering {
    GLIS = 'glis',
    BONY = 'bony',
    TREM = 'trem',
}

type ByBlockStrategy = {
    [x in YaosBlockStrategy]: ByBlockResolution
}
type ByBlockResolution = {
    [x in YaosBlockResolution]: YaosBlockStyle
}

export {
    YaosBlockStyle,
    YaosBlockResolution,
    YaosBlockStrategy,
    BarDuration,
    YaosRendering,
    ByBlockResolution,
    ByBlockStrategy,
    ZdaubBlockStyle,
    ZdaubRendering,
}
