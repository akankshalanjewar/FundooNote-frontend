import axios from "axios"

const headerconfig = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}
export const addNote = (obj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes?', obj, headerconfig)
    return response
}
export const getNotes = () => {
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', headerconfig)
    return response
}
export const changeColor = (obj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes', obj, headerconfig)
    return response
}
export const updateArchive = (obj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes', obj, headerconfig)
    return response
}
export const updateNotes = (obj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes', obj, headerconfig)
    return response
}