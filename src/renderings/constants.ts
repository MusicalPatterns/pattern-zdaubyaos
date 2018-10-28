// tslint:disable:no-magic-numbers

import { Index, Offset, Scalar, to } from '../../../../src'

const SUMMERY_SPRING_OFFSET: Offset = to.Offset(-1.5)
const SUMMERY_SPRING_SCALAR: Scalar = to.Scalar(2)
const SPRINGY_SUMMER_OFFSET: Offset = to.Offset(3)
const SPRINGY_SUMMER_SCALAR: Scalar = to.Scalar(0.5)

const SINGLE_DURATION: Index = to.Index(1)

export {
    SUMMERY_SPRING_OFFSET,
    SUMMERY_SPRING_SCALAR,
    SPRINGY_SUMMER_OFFSET,
    SPRINGY_SUMMER_SCALAR,
    SINGLE_DURATION,
}
