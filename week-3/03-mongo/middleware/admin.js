// Middleware for handling auth
const { Admin } = require("../db");

    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected


const adminMiddleware= async(req, res, next)=>{
    const adminUsername = req.headers.username
    const adminPassword = req.headers.password
        const admin = await Admin.findOne({
            username: adminUsername,
            password: adminPassword
        })
        console.log(admin);
        if(admin){
            next();
        }
        else{
            res.status(403).json({
                msg: "Admin doesnt exist"
            })
    }
}

module.exports = adminMiddleware;