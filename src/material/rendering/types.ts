import { PitchValue, Rendering } from '@musical-patterns/material'

type Renderings = { [Index in RenderingName]: Rendering<PitchValue> }

enum RenderingName {
    SPRING = 'SPRING',
    SUMMER = 'SUMMER',
    FALL = 'FALL',
    SUMMERY_SPRING = 'SUMMERY_SPRING',
    SPRINGY_SUMMER = 'SPRINGY_SUMMER',
    GLIS = 'GLIS',
    BONY = 'BONY',
    TREM = 'TREM',
    FLATLINE = 'FLATLINE',
}

export {
    Renderings,
    RenderingName,
}
