const testModel = require("../models/testModel");


// function for adding question
const addQuestion = async(req,res)=>{
    try{
        const {subject, question, option} = req.body
        const image1= req.files.image1 && req.files.image1[0]
        const image2= req.files.image2 && req.files.image2[0]

        const images = [image1,image2].filter((item)=>item!==undefined)

        const testData = {
            subject,
            question,
            option,
            images
        }
        console.log(testData);

        const questions = new testModel(testData)
        await questions.save()

        res.json({success: true, message: "Question Added"})

    }catch(error){
        res.json({success:false,message:error.message})
    }
}

// function for list questions
const questionLists=async(req,res)=>{
    try{
        const questions = await testModel.find({});
        res.json({success:true,questions})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
// function for removing question
const removeQuestion=async(req,res)=>{
    try{
        await testModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message: 'Question Removed'})
    }catch(e){
        console.log(e.message);
        res.json({success:false,message:e.message})
    }
}


module.exports={addQuestion,questionLists,removeQuestion};