import {
    standardInitialPatternSpec,
    StandardPatternSpec,
    standardPatternSpecAttributes,
    StandardPatternSpecData,
    StandardPatternSpecProperties,
} from '@musical-patterns/pattern'
import { ZDAUBYAOS_DURATION_SCALAR, ZDAUBYAOS_PITCH_SCALAR } from './constants'

const initial: StandardPatternSpec = {
    ...standardInitialPatternSpec,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: ZDAUBYAOS_DURATION_SCALAR,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: ZDAUBYAOS_PITCH_SCALAR,
}

const specData: StandardPatternSpecData = {
    attributes: standardPatternSpecAttributes,
    initial,
}

export {
    specData,
}
