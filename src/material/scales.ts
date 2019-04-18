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
import { apply, Hz, Scalar } from '@musical-patterns/utilities'

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
                scalar: apply.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).scalar,
                scalars: dubparticularSeriesScalars,
                translation: apply.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                scalar: apply.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).scalar,
                scalars: computeHarmonicSeriesScale().scalars,
                translation: apply.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                scalar: apply.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).scalar,
                scalars: superparticularSeriesScalars,
                translation: apply.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                scalar: apply.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).scalar,
                scalars: duperparticularSeriesScalars,
                translation: apply.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
            {
                scalar: apply.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).scalar,
                scalars: computeSubharmonicSeriesScale().scalars,
                translation: apply.Ordinal(standardScales, STANDARD_PITCH_SCALE_INDEX).translation,
            },
        ])
    }

export {
    materializeScales,
}
