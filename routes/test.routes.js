const express=require('express');
const {TestModel} = require("../models/test.model");

const testRouter=express.Router();

testRouter.post('/add',async(req,res)=>{
    const payload =req.body;

    try {
        const test = new TestModel(payload);
        await test.save();
        res.status(200).send({"msg":"Test document has been added successfully!!"});
    
    } catch (error) {
        res.status(400).json({error:error});
    }
})

testRouter.get('/',async(req,res)=>{
    try {
        const searchQuery = req.query;
        let test;

        if(searchQuery){
            test = await TestModel.find(searchQuery);
        }else{
            test = await TestModel.find({});
        }
        
        res.status(200).json(test);
    } catch (error) {
        res.status(400).json({"err":error});
    }
})

testRouter.patch('/update/:id',async(req,res)=>{
    const {id } = req.params;
    const payload = req.body;

    try {
        const test = await TestModel.findOne({"_id":id});

        if(test){
            await TestModel.findByIdAndUpdate({"_id":id}, payload);
            res.status(200).send({"msg":"Test document has been updated successfully!!"});
        }else{
            res.status(200).json({"msg":"Test document is not available in Database"});
        }
    } catch (error) {
        res.status(400).send({"err":error});
    }

})

testRouter.delete("/delete/:id", async (req,res)=>{
    const {id} =req.params;

    try {
        const test = await TestModel.findOne({"_id": id});
        if(test){
            await TestModel.findByIdAndDelete({"_id":id});
            res.status(200).send({"msg":"Test document has been deleted successfully!!"});

        }
    } catch (error) {
        res.status(400).send({"err":error});
    }
})

module.exports = {testRouter};