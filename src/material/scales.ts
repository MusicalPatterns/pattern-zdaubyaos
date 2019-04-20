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
import { Hz, Scalar, use } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    // tslint:disable-next-line no-any
    (specs: StandardSpecs): Array<Scale<any>> => {
        const superparticularSeriesScalars: Array<Scalar<Hz>> = computeSuperparticularSeriesScalars()
        const duperparticularSeriesScalars: Array<Scalar<Hz>> = computeDuperparticularSeriesScalars()
        const subparticularSeriesScalars: Array<Scalar<Hz>> = computeSubparticularSeriesScalars()
        const dubparticularSeriesScalars: Array<Scalar<Hz>> = computeDubparticularSeriesScalars()

        // tslint:disable-next-line no-any
        const standardScales: Array<Scale<any>> = materializeStandardScales(
            specs,
            { durationScalars: computeFlatDurationsScale().scalars, pitchScalars: subparticularSeriesScalars },
        )

        return standardScales.concat([
            {
                scalar: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).scalar,
                scalars: dubparticularSeriesScalars,
                translation: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                scalar: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).scalar,
                scalars: computeHarmonicSeriesScale().scalars,
                translation: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                scalar: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).scalar,
                scalars: superparticularSeriesScalars,
                translation: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                scalar: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).scalar,
                scalars: duperparticularSeriesScalars,
                translation: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                scalar: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).scalar,
                scalars: computeSubharmonicSeriesScale().scalars,
                translation: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
        ])
    }

export {
    materializeScales,
}
