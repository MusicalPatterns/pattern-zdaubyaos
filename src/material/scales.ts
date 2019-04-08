import {
    computeFlatDurationsScale,
    computeHarmonicSeriesScale,
    computeSubharmonicSeriesScale,
    MaterializeScales,
    materializeStandardScales,
    Scale,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import {
    computeDubparticularSeriesScalars,
    computeDuperparticularSeriesScalars,
    computeSubparticularSeriesScalars,
    computeSuperparticularSeriesScalars,
} from '@musical-patterns/pattern-xenharmonic-series'
import { StandardSpecs } from '@musical-patterns/spec'
import { from, Scalar } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    (specs: StandardSpecs): Scale[] => {
        const superparticularSeriesScalars: Scalar[] = computeSuperparticularSeriesScalars()
            .map<Scalar>(from.Frequency)
        const duperparticularSeriesScalars: Scalar[] = computeDuperparticularSeriesScalars()
            .map<Scalar>(from.Frequency)
        const subparticularSeriesScalars: Scalar[] = computeSubparticularSeriesScalars()
            .map<Scalar>(from.Frequency)
        const dubparticularSeriesScalars: Scalar[] = computeDubparticularSeriesScalars()
            .map<Scalar>(from.Frequency)

        const standardScales: Scale[] = materializeStandardScales(
            specs,
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
