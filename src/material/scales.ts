import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { from, Offset, Scalar, to } from '@musical-patterns/utilities'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const patternPitchScalar: Scalar =
            to.Scalar(from.Frequency(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Frequency(1)))
        const patternPitchOffset: Offset =
            spec[ StandardSpecProperties.FREQUENCY_OFFSET ] || to.Offset(0)
        const patternDurationScalar: Scalar =
            to.Scalar(from.Millisecond(spec[ StandardSpecProperties.BASE_DURATION ] || to.Millisecond(1)))
        const patternDurationOffset: Offset =
            spec[ StandardSpecProperties.DURATION_OFFSET ] || to.Offset(0)

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
