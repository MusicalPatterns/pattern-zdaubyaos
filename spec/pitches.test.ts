import {
    dubparticularSeriesPitches,
    duperparticularSeriesPitches,
    subparticularSeriesPitches,
    superparticularSeriesPitches,
} from '../pitches'

describe('pitches', () => {
    describe('subparticular series', () => {
        it('has all the pitches whose numerator is one less than the denominator', () => {
            [
                1 / 2,
                2 / 3,
                3 / 4,
                4 / 5,
            ].forEach((expectedPitch, index) => {
                expect(subparticularSeriesPitches[index]).toEqual(expectedPitch)
            })
        })
    })

    describe('dubparticular series', () => {
        it('has all the pitches whose numerator is two less than the denominator', () => {
            [
                1 / 3,
                2 / 4,
                3 / 5,
                4 / 6,
            ].forEach((expectedPitch, index) => {
                expect(dubparticularSeriesPitches[index]).toEqual(expectedPitch)
            })
        })
    })

    describe('superparticular series', () => {
        it('has all the pitches whose numerator is one more than the denominator', () => {
            [
                2 / 1,
                3 / 2,
                4 / 3,
                5 / 4,
            ].forEach((expectedPitch, index) => {
                expect(superparticularSeriesPitches[index]).toEqual(expectedPitch)
            })
        })
    })

    describe('duperparticular series', () => {
        it('has all the pitches whose numerator is two more than the denominator', () => {
            [
                3 / 1,
                4 / 2,
                5 / 3,
                6 / 4,
            ].forEach((expectedPitch, index) => {
                expect(duperparticularSeriesPitches[index]).toEqual(expectedPitch)
            })
        })
    })
})
