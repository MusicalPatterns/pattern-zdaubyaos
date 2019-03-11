import { MaterializeScales, Scale } from '@musical-patterns/compiler'
import {
    computeFlatDurationsScale,
    computeHarmonicSeriesScale,
    computeSubharmonicSeriesScale,
    materializeStandardScales,
    STANDARD_PITCH_SCALE_INDEX,
    StandardSpec,
} from '@musical-patterns/pattern'
import {
    computeDubparticularSeriesScalars,
    computeDuperparticularSeriesScalars,
    computeSubparticularSeriesScalars,
    computeSuperparticularSeriesScalars,
} from '@musical-patterns/pattern-xenharmonic-series'
import { from, Scalar } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    (spec: StandardSpec): Scale[] => {
        const superparticularSeriesScalars: Scalar[] = computeSuperparticularSeriesScalars()
            .map<Scalar>(from.Frequency)
        const duperparticularSeriesScalars: Scalar[] = computeDuperparticularSeriesScalars()
            .map<Scalar>(from.Frequency)
        const subparticularSeriesScalars: Scalar[] = computeSubparticularSeriesScalars()
            .map<Scalar>(from.Frequency)
        const dubparticularSeriesScalars: Scalar[] = computeDubparticularSeriesScalars()
            .map<Scalar>(from.Frequency)

        const standardScales: Scale[] = materializeStandardScales(
            spec,
            { durationScalars: computeFlatDurationsScale().scalars, pitchScalars: subparticularSeriesScalars },
        )

        return standardScales.concat([
            {
                scalar: standardScales[ STANDARD_PITCH_SCALE_INDEX ].scalar,
                scalars: dubparticularSeriesScalars,
                translation: standardScales[ STANDARD_PITCH_SCALE_INDEX ].translation,
            },
            {
                scalar: standardScales[ STANDARD_PITCH_SCALE_INDEX ].scalar,
                scalars: computeHarmonicSeriesScale().scalars,
                translation: standardScales[ STANDARD_PITCH_SCALE_INDEX ].translation,
            },
            {
                scalar: standardScales[ STANDARD_PITCH_SCALE_INDEX ].scalar,
                scalars: superparticularSeriesScalars,
                translation: standardScales[ STANDARD_PITCH_SCALE_INDEX ].translation,
            },
            {
                scalar: standardScales[ STANDARD_PITCH_SCALE_INDEX ].scalar,
                scalars: duperparticularSeriesScalars,
                translation: standardScales[ STANDARD_PITCH_SCALE_INDEX ].translation,
            },
            {
                scalar: standardScales[ STANDARD_PITCH_SCALE_INDEX ].scalar,
                scalars: computeSubharmonicSeriesScale().scalars,
                translation: standardScales[ STANDARD_PITCH_SCALE_INDEX ].translation,
            },
        ])
    }

export {
    materializeScales,
}
