// tslint:disable no-magic-numbers

import { as, Pitch, Scalar } from '@musical-patterns/utilities'

const NOT_TRUE_SUPERPARTICULAR_INITIAL_PITCH: Scalar<Pitch> = as.Scalar<Pitch>(2 / 1)
const NOT_TRUE_SUBSUPERPARTICULAR_INITIAL_PITCH: Scalar<Pitch> = as.Scalar<Pitch>(1 / 2)

export {
    NOT_TRUE_SUBSUPERPARTICULAR_INITIAL_PITCH,
    NOT_TRUE_SUPERPARTICULAR_INITIAL_PITCH,
}
