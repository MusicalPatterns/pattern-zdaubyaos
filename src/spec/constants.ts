// tslint:disable no-magic-numbers

import {
    Duration,
    musicalAs,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    Tone,
} from '@musical-patterns/utilities'

const ZDAUBYAOS_INITIAL_MS_PHYSICALIZATION: Duration = musicalAs.Duration(140)
const ZDAUBYAOS_INITIAL_HZ_PHYSICALIZATION: Tone =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._4 ]

export {
    ZDAUBYAOS_INITIAL_MS_PHYSICALIZATION,
    ZDAUBYAOS_INITIAL_HZ_PHYSICALIZATION,
}
