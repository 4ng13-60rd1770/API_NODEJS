import {Schema, model} from 'mongoose'

 const projectShema = new Schema ({
    name: String,
    description: String
}, {
    timestamps: true,

})

export default model('Project',projectShema)
