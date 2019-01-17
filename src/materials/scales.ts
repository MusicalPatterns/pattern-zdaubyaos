import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, PatternSpec, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { Offset, Scalar, to } from '@musical-patterns/utilities'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction = (patternSpec: PatternSpec): Scale[] => {
    const patternPitchScalar: Scalar =
        patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ] || to.Scalar(1)
    const patternPitchOffset: Offset =
        patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ] || to.Offset(0)
    const patternDurationScalar: Scalar =
        patternSpec[ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ] || to.Scalar(1)
    const patternDurationOffset: Offset =
        patternSpec[ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ] || to.Offset(0)

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
