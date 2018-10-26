import { BaseSongSpec, DEFAULT_DURATION_SCALAR, Scalar } from '../../../src'

// tslint:disable-next-line:no-any no-magic-numbers
const ZDAUBYAOS_PITCH_SCALAR: Scalar = 440 as any

const zdaubyaosSongSpec: BaseSongSpec = {
    songDurationScalar: DEFAULT_DURATION_SCALAR,
    songPitchScalar: ZDAUBYAOS_PITCH_SCALAR,
}

export {
    zdaubyaosSongSpec,
}
