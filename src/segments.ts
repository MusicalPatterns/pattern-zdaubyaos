import { backboneSegment } from './segments/backboneSegments'
import {
    breatherFallSegment,
    breatherSpringAltSegment,
    breatherSpringSegment,
    breatherSummerSegment,
    breatherVarietySegment,
} from './segments/breatherSegments'
import { experimentWithIestttAndUmowwwSegment, thirtyfiveSegment } from './segments/otherSegments'
import { shiftySegment } from './segments/shiftySegments'
import {
    trueAllYaosSeemsAMessSegment,
    trueFallAllYaosBizarroSegment,
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSummerAllYaosInaidjiyaiouzdSegment,
    trueSummerAllYaosUmowchuwowiestSegment,
} from './segments/trueYaosSegments'

import {
    trueAllZdaubTriumphantSegment,
    trueBonyJigSegment,
    trueSpringWithZdaubSegment,
    trueSummerWithZdaubSegment,
} from './segments/trueZdaubSegments'
import { Segment } from './types'

const segments: Segment[] = [
    // 0
    breatherSpringSegment,
    trueSpringAllYaosUmowchuwowiestSegment,
    trueSpringWithZdaubSegment,
    // 3
    breatherSummerSegment,
    trueSummerAllYaosUmowchuwowiestSegment,
    trueSummerWithZdaubSegment,
    // 6
    breatherFallSegment,
    trueSummerAllYaosInaidjiyaiouzdSegment,
    // 8
    breatherSpringAltSegment,
    trueFallAllYaosBizarroSegment,
    trueBonyJigSegment,
    shiftySegment,
    thirtyfiveSegment,
    // 13
    breatherVarietySegment,
    trueAllYaosSeemsAMessSegment,
    trueAllZdaubTriumphantSegment,
    backboneSegment,
    experimentWithIestttAndUmowwwSegment,
]

export default segments
