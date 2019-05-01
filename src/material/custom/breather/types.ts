import { PitchValue, Segment } from '@musical-patterns/material'
import { ContourWhole } from '@musical-patterns/utilities'

interface BreatherSegments {
    doubleFallWhichIsGoodIntroForJig: Segment,
    spring: Segment,
    springAltNiceAsABreatherToABreather: Segment,
    summer: Segment,
    varietyQuiteTheReveille: Segment,
}

interface BreatherContourWholes {
    doubleFall: ContourWhole<PitchValue>,
    doubleRest: ContourWhole<PitchValue>,
    rest: ContourWhole<PitchValue>,
    spring: ContourWhole<PitchValue>,
    springAlt: ContourWhole<PitchValue>,
    summer: ContourWhole<PitchValue>,
    variety: ContourWhole<PitchValue>,
}

export {
    BreatherSegments,
    BreatherContourWholes,
}
