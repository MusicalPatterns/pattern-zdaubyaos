// tslint:disable no-magic-numbers

import {
    Hz,
    Ms,
    ofFrom,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const ZDAUBYAOS_INITIAL_BASE_DURATION: Scalar<Ms> = to.Scalar<Ms>(140)
const ZDAUBYAOS_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    to.Scalar(ofFrom(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._4 ]))

export {
    ZDAUBYAOS_INITIAL_BASE_DURATION,
    ZDAUBYAOS_INITIAL_BASE_FREQUENCY,
}
