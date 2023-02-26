import {combineReducers} from '@reduxjs/toolkit'
import notes from './notes'
import notebooks from './notebooks'
import notebookList from './notebookList'
import recentNoteList from './recentNoteList'
import tags from './tags'

export default combineReducers({
    notes:notes,
    notebooks:notebooks,
    tags:tags,
    notebookList:notebookList,
    recentNoteList:recentNoteList
})