import flipEntities from '../flipEntities'
import {
    trueYaosInaidjiyaiouzdSummerToSpringComplementyPart,
    trueYaosInaidjiyaiouzdSummerToSpringPart, trueYaosUmowchuwowiestFallWithDjiyaiiiSplashAndPitchAdjustmentPart,
    trueYaosUmowchuwowiestSpringToSummerPart,
    trueYaosUmowchuwowiestSummerToSpringPart,
} from '../parts/trueYaosParts'
import { Segment } from '../types'

const trueSpringAllYaosUmowchuwowiestSegment: Segment = flipEntities(
    [
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSpringToSummerPart,
    ],
    [false, false, false],
)

const trueSummerAllYaosUmowchuwowiestSegment: Segment = flipEntities(
    [
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
    ],
    [true, false, false],
)

const trueSummerAllYaosInaidjiyaiouzdSegment: Segment = flipEntities(
    [
        trueYaosInaidjiyaiouzdSummerToSpringPart,
        trueYaosInaidjiyaiouzdSummerToSpringComplementyPart,
        trueYaosInaidjiyaiouzdSummerToSpringComplementyPart,
    ],
    [true, true, true],
)

const trueFallAllYaosBizarroSegment: Segment = flipEntities(
    [
        trueYaosUmowchuwowiestFallWithDjiyaiiiSplashAndPitchAdjustmentPart,
        trueYaosUmowchuwowiestFallWithDjiyaiiiSplashAndPitchAdjustmentPart,
        trueYaosUmowchuwowiestFallWithDjiyaiiiSplashAndPitchAdjustmentPart,
    ],
    [true, true, true],
)

const trueAllYaosSeemsAMessSegment: Segment = flipEntities(
    [
        trueYaosUmowchuwowiestSpringToSummerPart,
        trueYaosUmowchuwowiestSummerToSpringPart,
        trueYaosInaidjiyaiouzdSummerToSpringPart,
    ],
    [false, false, false],
)

export {
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSummerAllYaosUmowchuwowiestSegment,
    trueSummerAllYaosInaidjiyaiouzdSegment,
    trueFallAllYaosBizarroSegment,
    trueAllYaosSeemsAMessSegment,
}
