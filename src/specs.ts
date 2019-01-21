import {
    standardInitialSpec,
    StandardSpec,
    standardSpecAttributes,
    StandardSpecData,
    StandardSpecProperties,
} from '@musical-patterns/pattern'
import { ZDAUBYAOS_BASE_DURATION, ZDAUBYAOS_BASE_FREQUENCY } from './constants'

const initial: StandardSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_DURATION ]: ZDAUBYAOS_BASE_DURATION,
    [ StandardSpecProperties.BASE_FREQUENCY ]: ZDAUBYAOS_BASE_FREQUENCY,
}

const specData: StandardSpecData = {
    attributes: standardSpecAttributes,
    initial,
}

export {
    specData,
}
