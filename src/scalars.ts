import { applyOffset, DictionaryOf, numbers, Scalar, to } from '../../../src'
import { DUPER, SUPER } from './constants'

const buildZdaubyaosScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const subparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
            to.Scalar(n / applyOffset(n, SUPER)))

        const dubparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
            to.Scalar(n / applyOffset(n, DUPER)))

        const superparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
            to.Scalar(applyOffset(n, SUPER) / (n)))

        const duperparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
            to.Scalar(applyOffset(n, DUPER) / (n)))

        return {
            dubparticularSeriesScalars,
            duperparticularSeriesScalars,
            subparticularSeriesScalars,
            superparticularSeriesScalars,
        }
    }

export {
    buildZdaubyaosScalars,
}
