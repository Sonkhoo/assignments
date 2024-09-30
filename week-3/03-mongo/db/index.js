const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin.js")
const userRouter = require("./routes/user.js");



const PORT = 3000;
// Connect to MongoDB
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://sankhadeepchowdhury5:NEOrwNmkqdOeehcm@cluster0-100.en0k4.mongodb.net/0-100 Cohort')
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`)
    }
    catch (error) {
        console.log('MongoDB connection failed')
        console.log(error)
    }
}
connectDB()
.then(()=>{
    console.log("MongoDB connected 1");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err)=>{
    console.log(err);
})


// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

a
// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,    
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdCourses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Course'
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,    
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    purchasedCourses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Course'
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

//exporting connectDB

module.exports = {
    Admin,
    User,
    Course,
}
