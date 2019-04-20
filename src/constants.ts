// tslint:disable no-magic-numbers

import { Note, Scale } from '@musical-patterns/material'
import { as, Cardinal, Ordinal, Translation } from '@musical-patterns/utilities'

const FIFTEEN: Cardinal = as.Cardinal(15)
const TWENTYFOUR: Cardinal = as.Cardinal(24)

const ZDAUBYAOS_SEGMENT_COUNT: Cardinal = as.Cardinal(18)

const SEGMENT_A: Ordinal<Note[]> = as.Ordinal<Note[]>(0)
const SEGMENT_B: Ordinal<Note[]> = as.Ordinal<Note[]>(1)
const SEGMENT_C: Ordinal<Note[]> = as.Ordinal<Note[]>(2)

const INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT: Ordinal = as.Ordinal(0)

const TRANSLATION_FOR_GAIN_AND_DURATIONS_SCALES: Translation<Ordinal<Scale>> = as.Translation<Ordinal<Scale>>(2)

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
