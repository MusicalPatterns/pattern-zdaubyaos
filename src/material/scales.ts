// tslint:disable no-non-null-assertion

import {
    AbstractName,
    computeHarmonicSeriesScale,
    computeSubharmonicSeriesScale,
    MaterializeScales,
    materializeStandardScales,
    Scales,
    thunkFlatValueScale,
} from '@musical-patterns/material'
import {
    thunkDubduperparticularSeriesScalars,
    thunkDuperparticularSeriesScalars,
    thunkSubsuperparticularSeriesScalars,
    thunkSuperparticularSeriesScalars,
} from '@musical-patterns/pattern-xenharmonic-series'
import { Specs } from '@musical-patterns/spec'
import { as, Pitch, Scalar } from '@musical-patterns/utilities'
import { NOT_TRUE_SUBSUPERPARTICULAR_INITIAL_PITCH, NOT_TRUE_SUPERPARTICULAR_INITIAL_PITCH } from './constants'

const materializeScales: MaterializeScales =
    // tslint:disable-next-line no-any
    (specs: Specs): Scales => {
        const superparticularSeriesScalars: Array<Scalar<Pitch>> = thunkSuperparticularSeriesScalars()
        const duperparticularSeriesScalars: Array<Scalar<Pitch>> = thunkDuperparticularSeriesScalars()
        const subsuperparticularSeriesScalars: Array<Scalar<Pitch>> = thunkSubsuperparticularSeriesScalars()
        const dubduperparticularSeriesScalars: Array<Scalar<Pitch>> = thunkDubduperparticularSeriesScalars()

        superparticularSeriesScalars.unshift(NOT_TRUE_SUPERPARTICULAR_INITIAL_PITCH)
        subsuperparticularSeriesScalars.unshift(NOT_TRUE_SUBSUPERPARTICULAR_INITIAL_PITCH)

        // tslint:disable-next-line no-any
        const standardScales: Scales = materializeStandardScales(
            specs,
            { valueScalars: thunkFlatValueScale().scalars, pitchScalars: subsuperparticularSeriesScalars },
        )

        standardScales[ AbstractName.PITCH ]!.push(
            {
                basis: standardScales[ AbstractName.PITCH ]![ 0 ].basis,
                scalars: dubduperparticularSeriesScalars,
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
