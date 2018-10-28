import { DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR } from '../../../src'
import { SongSpec } from '../../types'
import { ZDAUBYAOS_PITCH_SCALAR } from './constants'

const zdaubyaosSongSpec: SongSpec = {
    songDurationScalar: DEFAULT_ATOMIC_TIME_TYPE_DURATION_SCALAR,
    songPitchScalar: ZDAUBYAOS_PITCH_SCALAR,
}

export {
    zdaubyaosSongSpec,
}
