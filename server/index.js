const projects = require('./routes/projects.routes.js')
const morgan = require("morgan")
const express = require("express")
const cors = require("cors")
const { Resend } = require('resend');
const resend = new Resend("re_2ALbmLhk_6HR33kxZcMrGQyBx5mBoD9gx");
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
app.use(morgan("tiny"))
// app.use(cors(
//   {
//       origin: ["http://localhost:5173/"],
//       methods: ["POST", "GET"],
//       credentials: false
//   }
// ));
app.use(cors());
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/public', express.static('./public'))
app.use("/", projects)


app.post("/api/send", async (req, res) => {
    try {
      const { from, to, subject, html } = req.body; 
  
      const { data, error } = await resend.emails.send({
        from: from,
        to: to,
        subject: subject,
        html: html,
      });
  
      if (error) {
        return res.status(400).json({ error });
      }
  
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{
    console.log("Connected to MongoDB Atlas")
    })
    .catch((error)=>{
        console.error(error)
    }) 

app.listen(port, () =>{
    console.log("server listening on port http://localhost:"+port)
})
