const express=require("express")
const cors = require("cors")
const collection=require("./mongo")
const { data } = require("react-router-dom")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())




app.delete('/collections/:id', async (req, res) => {
  try {
    await collection.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete' });
  }
});


app.get('/collections', async (req, res) => {
    try{
        const collections = await collection.find();
        res.json(collections);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });   
    }
});

app.put("/collections/:id", async (req, res) => {
    try {
        const updatedStudent = await collection.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedStudent) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.json(updatedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" }); 
    }
});


app.post("/",async(req,res)=>{
    const {name,gender,phone,email,course,batch,college,command}=req.body
    try {
    const data={ 
        name:name,
        gender:gender,
        phone:phone,
        email:email,
        course:course,
        batch:batch,
        college:college,
        command:command,
    }
    await collection.insertMany([data]);  
    res.status(201).json({ message: "Data inserted" });
    } catch (error) {
        res.status(500).json({ error: "Insert failed" });
    }
}); 


app.listen(8000,()=>{
    console.log("port connected");
})
