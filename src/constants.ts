// tslint:disable no-magic-numbers

import { Note, Scale } from '@musical-patterns/material'
import { Cardinal, Ordinal, to, Translation } from '@musical-patterns/utilities'

const FIFTEEN: Cardinal = to.Cardinal(15)
const TWENTYFOUR: Cardinal = to.Cardinal(24)

const ZDAUBYAOS_SEGMENT_COUNT: Cardinal = to.Cardinal(18)

const SEGMENT_A: Ordinal<Note[]> = to.Ordinal<Note[]>(0)
const SEGMENT_B: Ordinal<Note[]> = to.Ordinal<Note[]>(1)
const SEGMENT_C: Ordinal<Note[]> = to.Ordinal<Note[]>(2)

const INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT: Ordinal = to.Ordinal(0)

const TRANSLATION_FOR_GAIN_AND_DURATIONS_SCALES: Translation<Ordinal<Scale>> = to.Translation<Ordinal<Scale>>(2)

export {
    FIFTEEN,
    TWENTYFOUR,
    ZDAUBYAOS_SEGMENT_COUNT,
    SEGMENT_A,
    SEGMENT_B,
    SEGMENT_C,
    INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT,
    TRANSLATION_FOR_GAIN_AND_DURATIONS_SCALES,
}
