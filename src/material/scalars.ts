import { apply, DictionaryOf, positiveIntegers, Scalar, to } from '@musical-patterns/utilities'
import { DUPER, SUPER } from '../constants'

const buildScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const subparticularSeriesScalars: Scalar[] = positiveIntegers.map((n: number): Scalar =>
            to.Scalar(n / apply.Offset(n, SUPER)))

        const dubparticularSeriesScalars: Scalar[] = positiveIntegers.map((n: number): Scalar =>
            to.Scalar(n / apply.Offset(n, DUPER)))

        const superparticularSeriesScalars: Scalar[] = positiveIntegers.map((n: number): Scalar =>
            to.Scalar(apply.Offset(n, SUPER) / (n)))

        const duperparticularSeriesScalars: Scalar[] = positiveIntegers.map((n: number): Scalar =>
            to.Scalar(apply.Offset(n, DUPER) / (n)))

        return {
            dubparticularSeriesScalars,
            duperparticularSeriesScalars,
            subparticularSeriesScalars,
            superparticularSeriesScalars,
        }
    }

export {
    buildScalars,
}
