// tslint:disable:no-magic-numbers

import { Count, Index, Offset, Scalar, Time, to } from '@musical-patterns/utilities'

const FIFTEEN: Time = to.Time(15)
const TWENTYFOUR: Time = to.Time(24)

const SUPER: Offset = to.Offset(1)
const DUPER: Offset = to.Offset(2)

const ZDAUBYAOS_SEGMENT_COUNT: Count = to.Count(17)

const ZDAUBYAOS_DURATION_SCALAR: Scalar = to.Scalar(20)
const ZDAUBYAOS_PITCH_SCALAR: Scalar = to.Scalar(440)

const SEGMENT_A: Index = to.Index(0)
const SEGMENT_B: Index = to.Index(1)
const SEGMENT_C: Index = to.Index(2)

const PITCH_INDEX_INDICATING_REST: Index = to.Index(0)

const INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT: Index = to.Index(0)
const INDEX_OF_DURATION_INDEX_WITHIN_CONTOUR_ELEMENT: Index = to.Index(1)

const OFFSET_FOR_GAIN_AND_DURATIONS_SCALES: Offset = to.Offset(2)

export {
    FIFTEEN,
    TWENTYFOUR,
    SUPER,
    DUPER,
    ZDAUBYAOS_SEGMENT_COUNT,
    ZDAUBYAOS_DURATION_SCALAR,
    ZDAUBYAOS_PITCH_SCALAR,
    SEGMENT_A,
    SEGMENT_B,
    SEGMENT_C,
    PITCH_INDEX_INDICATING_REST,
    INDEX_OF_DURATION_INDEX_WITHIN_CONTOUR_ELEMENT,
    INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT,
    OFFSET_FOR_GAIN_AND_DURATIONS_SCALES,
}
