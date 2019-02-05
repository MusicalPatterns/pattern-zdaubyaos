import { apply, DictionaryOf, positiveIntegers, Scalar, to } from '@musical-patterns/utilities'
import { DUPER, SUPER } from '../constants'

const buildScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const subparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: number): Scalar =>
            to.Scalar(integer / apply.Offset(integer, SUPER)))

        const dubparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: number): Scalar =>
            to.Scalar(integer / apply.Offset(integer, DUPER)))

        const superparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: number): Scalar =>
            to.Scalar(apply.Offset(integer, SUPER) / (integer)))

        const duperparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: number): Scalar =>
            to.Scalar(apply.Offset(integer, DUPER) / (integer)))

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
