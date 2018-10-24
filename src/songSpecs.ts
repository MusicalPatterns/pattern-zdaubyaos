import { DEFAULT_DURATION_SCALAR } from '../../../src/constants'
import { BaseSongSpec } from '../../../src/songTypes'
import { Scalar } from '../../../src/utilities/nominalTypes'

// tslint:disable-next-line:no-any no-magic-numbers
const ZDAUBYAOS_PITCH_SCALAR: Scalar = 440 as any

const zdaubyaosSongSpec: BaseSongSpec = {
    songDurationScalar: DEFAULT_DURATION_SCALAR,
    songPitchScalar: ZDAUBYAOS_PITCH_SCALAR,
}

export {
    zdaubyaosSongSpec,
}
