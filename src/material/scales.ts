// tslint:disable no-non-null-assertion

import {
    AbstractName,
    computeFlatValueScale,
    computeHarmonicSeriesScale,
    computeSubharmonicSeriesScale,
    MaterializeScales,
    materializeStandardScales,
    Scales,
} from '@musical-patterns/material'
import {
    computeDubparticularSeriesScalars,
    computeDuperparticularSeriesScalars,
    computeSubparticularSeriesScalars,
    computeSuperparticularSeriesScalars,
} from '@musical-patterns/pattern-xenharmonic-series'
import { Specs } from '@musical-patterns/spec'
import { Pitch, Scalar } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    // tslint:disable-next-line no-any
    (specs: Specs): Scales => {
        const superparticularSeriesScalars: Array<Scalar<Pitch>> = computeSuperparticularSeriesScalars()
        const duperparticularSeriesScalars: Array<Scalar<Pitch>> = computeDuperparticularSeriesScalars()
        const subparticularSeriesScalars: Array<Scalar<Pitch>> = computeSubparticularSeriesScalars()
        const dubparticularSeriesScalars: Array<Scalar<Pitch>> = computeDubparticularSeriesScalars()

        // tslint:disable-next-line no-any
        const standardScales: Scales = materializeStandardScales(
            specs,
            { valueScalars: computeFlatValueScale().scalars, pitchScalars: subparticularSeriesScalars },
        )

        standardScales[ AbstractName.PITCH ]!.push(
            {
                basis: standardScales[ AbstractName.PITCH ]![ 0 ].basis,
                scalars: dubparticularSeriesScalars,
                translation: standardScales[ AbstractName.PITCH ]![ 0 ].translation,
            })
        standardScales[ AbstractName.PITCH ]!.push(
            {
                basis: standardScales[ AbstractName.PITCH ]![ 0 ].basis,
                scalars: computeHarmonicSeriesScale().scalars,
                translation: standardScales[ AbstractName.PITCH ]![ 0 ].translation,
            })
        standardScales[ AbstractName.PITCH ]!.push(
            {
                basis: standardScales[ AbstractName.PITCH ]![ 0 ].basis,
                scalars: superparticularSeriesScalars,
                translation: standardScales[ AbstractName.PITCH ]![ 0 ].translation,
            })
        standardScales[ AbstractName.PITCH ]!.push(
            {
                basis: standardScales[ AbstractName.PITCH ]![ 0 ].basis,
                scalars: duperparticularSeriesScalars,
                translation: standardScales[ AbstractName.PITCH ]![ 0 ].translation,
            })
        standardScales[ AbstractName.PITCH ]!.push(
            {
                basis: standardScales[ AbstractName.PITCH ]![ 0 ].basis,
                scalars: computeSubharmonicSeriesScale().scalars,
                translation: standardScales[ AbstractName.PITCH ]![ 0 ].translation,
            })

        return standardScales
    }

export {
    materializeScales,
}
