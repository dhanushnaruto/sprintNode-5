import User from "./model.js";
import express from 'express'

const router = express.Router()

router.get('/', async( req, res)=>{
    const data = await User.find()
    res.json(data)
})

router.post('/', async (req, res)=>{
    const newUser = new User({
        full_name:req.body.full_name,
        mob_num:req.body.mob_num,
        pan_num:req.body.pan_num,
        manager_id:req.body.manager_id
    })
    

    try{
        const user = await newUser.save()
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json(error.message)
    }
})

router.put('/:id', async (req,res)=>{
    const id = req.params.id
    const updateUser = await User.findOneAndUpdate({manager_id:id}, {full_name:req.body.full_name}, {new:true})
    res.json(updateUser)
})

router.delete('/:id', async(req, res)=>{
    await User.deleteOne({manager_id:req.params.id})
    res.send('user deleted successfully')
})

export default router