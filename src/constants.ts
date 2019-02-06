// tslint:disable no-magic-numbers

import {
    Cardinal,
    Frequency,
    Milliseconds,
    Ordinal,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    Time,
    to,
    Translation,
} from '@musical-patterns/utilities'

const FIFTEEN: Time = to.Time(15)
const TWENTYFOUR: Time = to.Time(24)

const SUPER: Translation = to.Translation(1)
const DUPER: Translation = to.Translation(2)

const ZDAUBYAOS_SEGMENT_COUNT: Cardinal = to.Cardinal(17)

const ZDAUBYAOS_INITIAL_BASE_DURATION: Milliseconds = to.Milliseconds(140)
const ZDAUBYAOS_INITIAL_BASE_FREQUENCY: Frequency =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._4 ]

const SEGMENT_A: Ordinal = to.Ordinal(0)
const SEGMENT_B: Ordinal = to.Ordinal(1)
const SEGMENT_C: Ordinal = to.Ordinal(2)

const PITCH_INDEX_INDICATING_REST: Ordinal = to.Ordinal(0)

const INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT: Ordinal = to.Ordinal(0)
const INDEX_OF_DURATION_INDEX_WITHIN_CONTOUR_ELEMENT: Ordinal = to.Ordinal(1)

const TRANSLATION_FOR_GAIN_AND_DURATIONS_SCALES: Translation = to.Translation(2)

export {
    FIFTEEN,
    TWENTYFOUR,
    SUPER,
    DUPER,
    ZDAUBYAOS_SEGMENT_COUNT,
    ZDAUBYAOS_INITIAL_BASE_DURATION,
    ZDAUBYAOS_INITIAL_BASE_FREQUENCY,
    SEGMENT_A,
    SEGMENT_B,
    SEGMENT_C,
    PITCH_INDEX_INDICATING_REST,
    INDEX_OF_DURATION_INDEX_WITHIN_CONTOUR_ELEMENT,
    INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT,
    TRANSLATION_FOR_GAIN_AND_DURATIONS_SCALES,
}
