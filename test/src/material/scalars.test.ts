import { DictionaryOf, Scalar, testArraysAreClose, to } from '@musical-patterns/utilities'
import { buildScalars } from '../../../src/indexForTest'

describe('scalars', () => {
    describe('subparticular series scalars', () => {
        it('has all the pitches whose numerator is one less than the denominator', () => {
            const { subparticularSeriesScalars }: DictionaryOf<Scalar[]> = buildScalars()

            const expectedScalars: Scalar[] = [
                1 / 2,
                2 / 3,
                3 / 4,
                4 / 5,
            ].map(to.Scalar)

            testArraysAreClose(subparticularSeriesScalars, expectedScalars)
        })
    })

    describe('dubparticular series scalars', () => {
        it('has all the pitches whose numerator is two less than the denominator', () => {
            const { dubparticularSeriesScalars }: DictionaryOf<Scalar[]> = buildScalars()

            const expectedScalars: Scalar[] = [
                1 / 3,
                2 / 4,
                3 / 5,
                4 / 6,
            ].map(to.Scalar)

            testArraysAreClose(dubparticularSeriesScalars, expectedScalars)
        })
    })

    describe('superparticular series scalars', () => {
        it('has all the pitches whose numerator is one more than the denominator', () => {
            const { superparticularSeriesScalars }: DictionaryOf<Scalar[]> = buildScalars()

            const expectedScalars: Scalar[] = [
                2 / 1,
                3 / 2,
                4 / 3,
                5 / 4,
            ].map(to.Scalar)

            testArraysAreClose(superparticularSeriesScalars, expectedScalars)
        })
    })

    describe('duperparticular series scalars', () => {
        it('has all the pitches whose numerator is two more than the denominator', () => {
            const { duperparticularSeriesScalars }: DictionaryOf<Scalar[]> = buildScalars()

            const expectedScalars: Scalar[] = [
                3 / 1,
                4 / 2,
                5 / 3,
                6 / 4,
            ].map(to.Scalar)

            testArraysAreClose(duperparticularSeriesScalars, expectedScalars)
        })
    })
})
