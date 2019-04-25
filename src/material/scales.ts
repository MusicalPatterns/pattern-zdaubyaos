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
import { Pitch, Scalar, use } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    // tslint:disable-next-line no-any
    (specs: StandardSpecs): Array<Scale<any>> => {
        const superparticularSeriesScalars: Array<Scalar<Pitch>> = computeSuperparticularSeriesScalars()
        const duperparticularSeriesScalars: Array<Scalar<Pitch>> = computeDuperparticularSeriesScalars()
        const subparticularSeriesScalars: Array<Scalar<Pitch>> = computeSubparticularSeriesScalars()
        const dubparticularSeriesScalars: Array<Scalar<Pitch>> = computeDubparticularSeriesScalars()

        // tslint:disable-next-line no-any
        const standardScales: Array<Scale<any>> = materializeStandardScales(
            specs,
            { durationScalars: computeFlatDurationsScale().scalars, pitchScalars: subparticularSeriesScalars },
        )

        return standardScales.concat([
            {
                basis: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).basis,
                scalars: dubparticularSeriesScalars,
                translation: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                basis: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).basis,
                scalars: computeHarmonicSeriesScale().scalars,
                translation: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                basis: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).basis,
                scalars: superparticularSeriesScalars,
                translation: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                basis: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).basis,
                scalars: duperparticularSeriesScalars,
                translation: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                basis: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).basis,
                scalars: computeSubharmonicSeriesScale().scalars,
                translation: use.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
        ])
    }

export {
    materializeScales,
}
