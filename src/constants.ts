import { glisNoteType, tremNoteType } from './noteTypes'
import { NoteType } from './types'

const NOTE_TYPES_FOR_RENDERINGS: {[index: string]: NoteType } = {
    fall: glisNoteType,
    spring: tremNoteType,
    springySummer: tremNoteType,
    summer: tremNoteType,
    summerySpring: tremNoteType,
}

export {
    NOTE_TYPES_FOR_RENDERINGS,
}
