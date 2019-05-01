import {
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/spec'
import { ZDAUBYAOS_INITIAL_HZ_PHYSICALIZATION, ZDAUBYAOS_INITIAL_MS_PHYSICALIZATION } from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.MS_PHYSICALIZATION ]: ZDAUBYAOS_INITIAL_MS_PHYSICALIZATION,
    [ StandardSpec.HZ_PHYSICALIZATION ]: ZDAUBYAOS_INITIAL_HZ_PHYSICALIZATION,
}

const spec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs,
}

export {
    spec,
}
