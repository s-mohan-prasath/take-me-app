import {combineReducers} from '@reduxjs/toolkit'
import notes from './notes'
import notebooks from './notebooks'
import notebookList from './notebookList'
import recentNoteList from './recentNoteList'
import starredNotes from './starredNotes'
import tags from './tags'
import trash from './trash'
import archive from './archive'

export default combineReducers({
    notes:notes,
    notebooks:notebooks,
    tags:tags,
    notebookList:notebookList,
    recentNoteList:recentNoteList,
    starredNotes:starredNotes,
    trash:trash,
    archive:archive,
})