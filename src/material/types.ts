import { NoteSpec } from '@musical-patterns/compiler'
import { PitchDuration } from '@musical-patterns/pattern'
import { ContourElement } from '@musical-patterns/utilities'

type BuildNoteSpec = (contourElement: ContourElement<PitchDuration>) => NoteSpec

enum BarTarget {
    FIFTEEN = 'FIFTEEN',
    TWENTYFOUR = 'TWENTYFOUR',
}

enum BlockStyle {
    OUZD = 'OUZD',
    INAI = 'INAI',
    DJIYAI = 'DJIYAI',
    IEST = 'IEST',
    UMOW = 'UMOW',
    CHUWOW = 'CHUWOW',
    NODLE = 'NODLE',
    LIMIN = 'LIMIN',
    SCEND = 'SCEND',
}

interface ZdaubyaosParts {
    harmSubharm: NoteSpec[],
    subDub: NoteSpec[],
    superDuper: NoteSpec[],
}

export {
    BuildNoteSpec,
    BarTarget,
    BlockStyle,
    ZdaubyaosParts,
}
