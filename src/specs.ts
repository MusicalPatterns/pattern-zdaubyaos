import { PatternSpec, standardInitialPatternSpec, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { ZDAUBYAOS_DURATION_SCALAR, ZDAUBYAOS_PITCH_SCALAR } from './constants'

const initialSpec: PatternSpec = {
    ...standardInitialPatternSpec,
    [ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ]: ZDAUBYAOS_DURATION_SCALAR,
    [ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ]: ZDAUBYAOS_PITCH_SCALAR,
}

export {
    initialSpec,
}
