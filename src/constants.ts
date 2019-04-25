// tslint:disable no-magic-numbers

import { Scale, Segment } from '@musical-patterns/material'
import { as, Cardinal, Ordinal, Pitch } from '@musical-patterns/utilities'

const FIFTEEN: Cardinal = as.Cardinal(15)
const TWENTYFOUR: Cardinal = as.Cardinal(24)

const ZDAUBYAOS_SEGMENT_COUNT: Cardinal = as.Cardinal(18)

const SEGMENT_A: Ordinal<Segment> = as.Ordinal<Segment>(0)
const SEGMENT_B: Ordinal<Segment> = as.Ordinal<Segment>(1)
const SEGMENT_C: Ordinal<Segment> = as.Ordinal<Segment>(2)

const INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT: Ordinal = as.Ordinal(0)

const SHIFT_PAST_GAIN_AND_DURATION_SCALES_TO_PITCH_SCALE: Cardinal<Ordinal<Array<Scale<Pitch>>>> =
    as.Cardinal<Ordinal<Array<Scale<Pitch>>>>(2)

export {
    FIFTEEN,
    TWENTYFOUR,
    ZDAUBYAOS_SEGMENT_COUNT,
    SEGMENT_A,
    SEGMENT_B,
    SEGMENT_C,
    INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT,
    SHIFT_PAST_GAIN_AND_DURATION_SCALES_TO_PITCH_SCALE,
}
