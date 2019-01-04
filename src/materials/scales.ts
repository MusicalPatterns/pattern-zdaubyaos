import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, PatternSpec } from '@musical-patterns/pattern'
import { Offset, Scalar, to } from '@musical-patterns/utilities'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction = (patternSpec: PatternSpec): Scale[] => {
    const patternPitchScalar: Scalar = patternSpec.patternPitchScalar || to.Scalar(1)
    const patternPitchOffset: Offset = patternSpec.patternPitchOffset || to.Offset(0)
    const patternDurationScalar: Scalar = patternSpec.patternDurationScalar || to.Scalar(1)
    const patternDurationOffset: Offset = patternSpec.patternDurationOffset || to.Offset(0)

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
        { scalars: flatDurationsScale.scalars, scalar: patternDurationScalar, offset: patternDurationOffset },
        { scalars: subparticularSeriesScalars, scalar: patternPitchScalar, offset: patternPitchOffset },
        { scalars: dubparticularSeriesScalars, scalar: patternPitchScalar, offset: patternPitchOffset },
        { scalars: harmonicSeriesScale.scalars, scalar: patternPitchScalar, offset: patternPitchOffset },
        { scalars: superparticularSeriesScalars, scalar: patternPitchScalar, offset: patternPitchOffset },
        { scalars: duperparticularSeriesScalars, scalar: patternPitchScalar, offset: patternPitchOffset },
        { scalars: subharmonicSeriesScale.scalars, scalar: patternPitchScalar, offset: patternPitchOffset },
    ]
}

export {
    buildScales,
}
