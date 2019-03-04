import { NoteSpec } from '@musical-patterns/compiler'

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
    BarTarget,
    BlockStyle,
    ZdaubyaosParts,
}
