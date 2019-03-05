import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import {
    buildFlatDurationsScale,
    buildHarmonicSeriesScale,
    buildStandardScales,
    buildSubharmonicSeriesScale,
    STANDARD_PITCH_SCALE_INDEX,
    StandardSpec,
} from '@musical-patterns/pattern'
import {
    buildDubparticularSeriesScalars,
    buildDuperparticularSeriesScalars,
    buildSubparticularSeriesScalars,
    buildSuperparticularSeriesScalars,
} from '@musical-patterns/pattern-xenharmonic-series'
import { from, Scalar } from '@musical-patterns/utilities'

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const superparticularSeriesScalars: Scalar[] = buildSuperparticularSeriesScalars()
            .map<Scalar>(from.Frequency)
        const duperparticularSeriesScalars: Scalar[] = buildDuperparticularSeriesScalars()
            .map<Scalar>(from.Frequency)
        const subparticularSeriesScalars: Scalar[] = buildSubparticularSeriesScalars()
            .map<Scalar>(from.Frequency)
        const dubparticularSeriesScalars: Scalar[] = buildDubparticularSeriesScalars()
            .map<Scalar>(from.Frequency)

        const standardScales: Scale[] = buildStandardScales(
            spec,
            { durationScalars: buildFlatDurationsScale().scalars, pitchScalars: subparticularSeriesScalars },
        )

        return standardScales.concat([
            {
                scalar: standardScales[ STANDARD_PITCH_SCALE_INDEX ].scalar,
                scalars: dubparticularSeriesScalars,
                translation: standardScales[ STANDARD_PITCH_SCALE_INDEX ].translation,
            },
            {
                scalar: standardScales[ STANDARD_PITCH_SCALE_INDEX ].scalar,
                scalars: buildHarmonicSeriesScale().scalars,
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
                scalars: buildSubharmonicSeriesScale().scalars,
                translation: standardScales[ STANDARD_PITCH_SCALE_INDEX ].translation,
            },
        ])
    }

export {
    buildScales,
}
