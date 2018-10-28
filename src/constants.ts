// tslint:disable:no-magic-numbers

import { Count, Index, Offset, Scalar, Time, to } from '../../../src'

const FIFTEEN: Time = to.Time(15)
const TWENTYFOUR: Time = to.Time(24)

const SUPER: Offset = to.Offset(1)
const DUPER: Offset = to.Offset(2)

const ZDAUBYAOS_SEGMENT_COUNT: Count = to.Count(17)

const ZDAUBYAOS_PITCH_SCALAR: Scalar = to.Scalar(440)

const SEGMENT_A: Index = to.Index(0)
const SEGMENT_B: Index = to.Index(1)
const SEGMENT_C: Index = to.Index(2)

const PITCH_INDEX_INDICATING_REST: Index = to.Index(0)
const DURATIONS_AND_GAIN_SCALE_INDEX: Index = to.Index(6)

const INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT: Index = to.Index(0)
const INDEX_OF_DURATION_INDEX_WITHIN_CONTOUR_ELEMENT: Index = to.Index(1)

export {
    FIFTEEN,
    TWENTYFOUR,
    SUPER,
    DUPER,
    ZDAUBYAOS_SEGMENT_COUNT,
    ZDAUBYAOS_PITCH_SCALAR,
    SEGMENT_A,
    SEGMENT_B,
    SEGMENT_C,
    PITCH_INDEX_INDICATING_REST,
    DURATIONS_AND_GAIN_SCALE_INDEX,
    INDEX_OF_DURATION_INDEX_WITHIN_CONTOUR_ELEMENT,
    INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT,
}
