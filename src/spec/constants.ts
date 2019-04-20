// tslint:disable no-magic-numbers

import {
    as,
    Hz,
    Ms,
    ofNotAs,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
} from '@musical-patterns/utilities'

const ZDAUBYAOS_INITIAL_BASE_DURATION: Scalar<Ms> = as.Scalar<Ms>(140)
const ZDAUBYAOS_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    as.Scalar(ofNotAs(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._4 ]))

export {
    ZDAUBYAOS_INITIAL_BASE_DURATION,
    ZDAUBYAOS_INITIAL_BASE_FREQUENCY,
}
