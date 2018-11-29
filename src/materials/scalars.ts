import { apply, DictionaryOf, numbers, Scalar, to } from '@musical-patterns/utilities'
import { DUPER, SUPER } from '../constants'

const buildScalars: () => DictionaryOf<Scalar[]> =
    (): DictionaryOf<Scalar[]> => {
        const subparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
            to.Scalar(n / apply.Offset(n, SUPER)))

        const dubparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
            to.Scalar(n / apply.Offset(n, DUPER)))

        const superparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
            to.Scalar(apply.Offset(n, SUPER) / (n)))

        const duperparticularSeriesScalars: Scalar[] = numbers.map((n: number): Scalar =>
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
