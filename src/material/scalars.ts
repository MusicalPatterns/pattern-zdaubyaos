import { apply, DictionaryOf, positiveIntegers, reciprocal, Scalar, to } from '@musical-patterns/utilities'
import { DUPER, SUPER } from '../constants'

const buildScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const subparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: number): Scalar =>
            to.Scalar(apply.Scalar(integer, to.Scalar(reciprocal(apply.Offset(integer, SUPER))))))

        const dubparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: number): Scalar =>
            to.Scalar(apply.Scalar(integer, to.Scalar(reciprocal(apply.Offset(integer, DUPER))))))

        const superparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: number): Scalar =>
            to.Scalar(apply.Scalar(apply.Offset(integer, SUPER), to.Scalar(reciprocal(integer)))))

        const duperparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: number): Scalar =>
            to.Scalar(apply.Scalar(apply.Offset(integer, DUPER), to.Scalar(reciprocal(integer)))))

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
