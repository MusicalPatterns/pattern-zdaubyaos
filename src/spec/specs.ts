import {
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/pattern'
import { ZDAUBYAOS_INITIAL_BASE_DURATION, ZDAUBYAOS_INITIAL_BASE_FREQUENCY } from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASE_DURATION ]: ZDAUBYAOS_INITIAL_BASE_DURATION,
    [ StandardSpec.BASE_FREQUENCY ]: ZDAUBYAOS_INITIAL_BASE_FREQUENCY,
}

const spec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs,
}

export {
    spec,
}
