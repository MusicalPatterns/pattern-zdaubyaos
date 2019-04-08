import { PitchDuration, Segment } from '@musical-patterns/material'
import { ContourWhole } from '@musical-patterns/utilities'

interface BreatherSegments {
    doubleFallWhichIsGoodIntroForJig: Segment,
    spring: Segment,
    springAltNiceAsABreatherToABreather: Segment,
    summer: Segment,
    varietyQuiteTheReveille: Segment,
}

interface BreatherContourWholes {
    doubleFall: ContourWhole<PitchDuration>,
    doubleRest: ContourWhole<PitchDuration>,
    rest: ContourWhole<PitchDuration>,
    spring: ContourWhole<PitchDuration>,
    springAlt: ContourWhole<PitchDuration>,
    summer: ContourWhole<PitchDuration>,
    variety: ContourWhole<PitchDuration>,
}

export {
    BreatherSegments,
    BreatherContourWholes,
}
