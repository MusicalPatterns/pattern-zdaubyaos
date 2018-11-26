import { NoteSpec } from '../../../compile'
import { ContourElement } from '../../../nominal'

type BuildZdaubyaosNoteSpec = (contourElement: ContourElement) => NoteSpec

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

export {
    BuildZdaubyaosNoteSpec,
    ContourElement,
    BarTarget,
    BlockStyle,
}
