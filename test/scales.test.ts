// tslint:disable:no-magic-numbers

import { Scalar } from '../../../src/utilities/nominalTypes'
import * as to from '../../../src/utilities/to'
import {
    dubparticularSeriesScale,
    duperparticularSeriesScale,
    subparticularSeriesScale,
    superparticularSeriesScale,
} from '../src/scales'

describe('scales', () => {
    describe('subparticular series scale', () => {
        it('has all the pitches whose numerator is one less than the denominator', () => {
            [
                1 / 2,
                2 / 3,
                3 / 4,
                4 / 5,
            ].map(to.Scalar).forEach((expectedPitch: Scalar, index: number): void => {
                expect(subparticularSeriesScale[index]).toEqual(expectedPitch)
            })
        })
    })

    describe('dubparticular series scale', () => {
        it('has all the pitches whose numerator is two less than the denominator', () => {
            [
                1 / 3,
                2 / 4,
                3 / 5,
                4 / 6,
            ].map(to.Scalar).forEach((expectedPitch: Scalar, index: number): void => {
                expect(dubparticularSeriesScale[index]).toEqual(expectedPitch)
            })
        })
    })

    describe('superparticular series scale', () => {
        it('has all the pitches whose numerator is one more than the denominator', () => {
            [
                2 / 1,
                3 / 2,
                4 / 3,
                5 / 4,
            ].map(to.Scalar).forEach((expectedPitch: Scalar, index: number): void => {
                expect(superparticularSeriesScale[index]).toEqual(expectedPitch)
            })
        })
    })

    describe('duperparticular series scale', () => {
        it('has all the pitches whose numerator is two more than the denominator', () => {
            [
                3 / 1,
                4 / 2,
                5 / 3,
                6 / 4,
            ].map(to.Scalar).forEach((expectedPitch: Scalar, index: number): void => {
                expect(duperparticularSeriesScale[index]).toEqual(expectedPitch)
            })
        })
    })
})
