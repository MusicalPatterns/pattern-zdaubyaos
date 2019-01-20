import {
    standardInitialSpec,
    StandardSpec,
    standardSpecAttributes,
    StandardSpecData,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { ZDAUBYAOS_DURATION_SCALAR, ZDAUBYAOS_PITCH_SCALAR } from './constants'

const initial: StandardSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.PATTERN_DURATION_SCALAR ]: ZDAUBYAOS_DURATION_SCALAR,
    [ StandardSpecProperties.PATTERN_PITCH_SCALAR ]: ZDAUBYAOS_PITCH_SCALAR,
}

const specData: StandardSpecData = {
    attributes: standardSpecAttributes,
    initial,
}

export {
    specData,
}
