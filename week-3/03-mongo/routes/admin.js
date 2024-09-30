const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index.js");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const signUp = async (req,res)=>{
        const username = req.body.username;
        const password = req.body.password;
    
        // check if a user with this username already exists
        const checkifUserExists = await Admin.findOne({
            username: username
        })
        if(checkifUserExists){
            res.json({
                msg: "Admin already exists"
            })
        }
        await Admin.create({
            username: username,
            password: password
        })
        res.json({
            msg: "Admin created successfully"
        })
    }
    signUp(req,res)
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const username = req.headers.username;
    const password = req.headers.password;
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const createdCourses = async()=>{
        const existingCourse = await Course.findOne({
            title: title
        })
        if(existingCourse){
            res.json({
                msg: "Course already exists"
            })
        }
        const newCourse = Course.create({
            title,
            description,
            imageLink,
            price
        })
        res.json({
            msg: "Course created successfully",
            "courseId": newCourse._id
        })
    }
    createdCourses(username, password, title, description, imageLink, price, res)
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    const getCourses = async ()=>{
        const response = await Course.find({});
        res.json({
            courses: response
        })
    }
    getCourses(req,res)
});

module.exports = router;