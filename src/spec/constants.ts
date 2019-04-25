// tslint:disable no-magic-numbers

import {
    as,
    Duration,
    Ms,
    Pitch,
    Point,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
} from '@musical-patterns/utilities'

const ZDAUBYAOS_INITIAL_BASIS_DURATION: Duration = as.Delta<Ms>(140)
const ZDAUBYAOS_INITIAL_BASIS_FREQUENCY: Pitch =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._4 ]

export {
    ZDAUBYAOS_INITIAL_BASIS_DURATION,
    ZDAUBYAOS_INITIAL_BASIS_FREQUENCY,
}
