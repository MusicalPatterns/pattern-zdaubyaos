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
        // @ts-ignore
        const superparticularSeriesScalars: Scalar[] = buildSuperparticularSeriesScalars()
            .map(from.Frequency)
        // @ts-ignore
        const duperparticularSeriesScalars: Scalar[] = buildDuperparticularSeriesScalars()
            .map(from.Frequency)
        // @ts-ignore
        const subparticularSeriesScalars: Scalar[] = buildSubparticularSeriesScalars()
            .map(from.Frequency)
        // @ts-ignore
        const dubparticularSeriesScalars: Scalar[] = buildDubparticularSeriesScalars()
            .map(from.Frequency)

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
