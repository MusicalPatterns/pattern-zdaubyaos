// tslint:disable no-magic-numbers

import {
    Cardinal,
    Hz,
    Ms,
    Ordinal,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
    Translation,
} from '@musical-patterns/utilities'

const ZDAUBYAOS_INITIAL_BASE_DURATION: Scalar<Ms> = to.Scalar(to.Ms(140))
const ZDAUBYAOS_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    to.Scalar(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._4 ])

export {
    ZDAUBYAOS_INITIAL_BASE_DURATION,
    ZDAUBYAOS_INITIAL_BASE_FREQUENCY,
}
