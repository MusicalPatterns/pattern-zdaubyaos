import { BuildScalesFunction, buildStandardScales, Scalar, Scale, scaleFromScalarsAndScalar } from '../../../../src'
import { PatternSpec } from '../../../types'
import { buildZdaubyaosScalars } from './scalars'

const buildZdaubyaosScales: BuildScalesFunction = (patternSpec: PatternSpec): Scale[] => {
    const patternPitchScalar: Scalar = patternSpec.patternPitchScalar
    const patternDurationScalar: Scalar = patternSpec.patternDurationScalar

    const {
        subparticularSeriesScalars,
        dubparticularSeriesScalars,
        superparticularSeriesScalars,
        duperparticularSeriesScalars,
    } = buildZdaubyaosScalars()

    const {
        flatDurationsScale,
        harmonicSeriesScale,
        subharmonicSeriesScale,
    } = buildStandardScales()

    return [
        flatDurationsScale,
        scaleFromScalarsAndScalar(flatDurationsScale.scalars, patternDurationScalar),
        scaleFromScalarsAndScalar(subparticularSeriesScalars, patternPitchScalar),
        scaleFromScalarsAndScalar(dubparticularSeriesScalars, patternPitchScalar),
        scaleFromScalarsAndScalar(harmonicSeriesScale.scalars, patternPitchScalar),
        scaleFromScalarsAndScalar(superparticularSeriesScalars, patternPitchScalar),
        scaleFromScalarsAndScalar(duperparticularSeriesScalars, patternPitchScalar),
        scaleFromScalarsAndScalar(subharmonicSeriesScale.scalars, patternPitchScalar),
    ]
}

export {
    buildZdaubyaosScales,
}
