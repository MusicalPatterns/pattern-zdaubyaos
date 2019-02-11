import { apply, DictionaryOf, Integer, positiveIntegers, reciprocal, Scalar, to } from '@musical-patterns/utilities'
import { DUPER, SUPER } from '../constants'

const buildScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const subparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: Integer): Scalar =>
            to.Scalar(apply.Scalar(integer, to.Scalar(reciprocal(apply.Translation(integer, SUPER))))))

        const dubparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: Integer): Scalar =>
            to.Scalar(apply.Scalar(integer, to.Scalar(reciprocal(apply.Translation(integer, DUPER))))))

        const superparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: Integer): Scalar =>
            to.Scalar(apply.Scalar(apply.Translation(integer, SUPER), to.Scalar(reciprocal(integer)))))

        const duperparticularSeriesScalars: Scalar[] = positiveIntegers.map((integer: Integer): Scalar =>
            to.Scalar(apply.Scalar(apply.Translation(integer, DUPER), to.Scalar(reciprocal(integer)))))

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
