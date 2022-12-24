import noteModel from  "../models/note.js"


export async function createNote(req, res){
    const note = req.body;
    let documento

    try {
        documento = await noteModel.create(note)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(201)
    res.json(documento)
}

export async function readNote(req, res){
    const { jj } = req.body

    let documento

    try {

        const { idUsuario } = req.value;

        documento = await noteModel.findOne({ idUsuario })
        res.status(200).json(documents);
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}


export async function updateNote(req, res){
    const { idUsuario } = req.params
    const { cambios } = req.body

    let documento;

    try {
        documento = await noteModel.updateOne({
            idUsuario
        }, cambios)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}
export async function deleteNote(req, res){
    const { id } = req.params

    let documento;

    try {
        documento = await noteModel.findOneAndDelete({
            "_id": id
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}