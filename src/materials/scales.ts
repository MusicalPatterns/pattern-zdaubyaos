import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, PatternSpec, scaleFromScalarsAndScalar } from '@musical-patterns/pattern'
import { Scalar } from '@musical-patterns/utilities'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction = (patternSpec: PatternSpec): Scale[] => {
    const patternPitchScalar: Scalar = patternSpec.patternPitchScalar
    const patternDurationScalar: Scalar = patternSpec.patternDurationScalar

    const {
        subparticularSeriesScalars,
        dubparticularSeriesScalars,
        superparticularSeriesScalars,
        duperparticularSeriesScalars,
    } = buildScalars()

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
    buildScales,
}
