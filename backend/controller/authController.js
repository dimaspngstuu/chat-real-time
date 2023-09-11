const formidable = require('formidable');
const validator = require('validator');
const { default: isEmail } = require('validator/lib/isEmail');

module.exports.userRegister = (req,res) => {
    const form = new formidable.IncomingForm();
    form.parse(req,async(err, field, files) => {
        const { username,email,password,confirmPassword } = field;

        const {image} = files;

        const error = [];

        if(!username){
            error.push('Please provide your user name')
        }
        if(!email){
            error.push('Please provide your email')
        }
        if(email && !validator.isEmail(email)){
            error.push('Please provide your valid email')
        }
        if(!password){
            error.push('Please provide your password')
        }
        if(!confirmPassword){
            error.push('Please provide your confirm password')
        }
        if(password !== confirmPassword){
            error.push('Your password and confirm password not same')
        }
        if(password && password.length < 6){
            error.push('Your password must be 6 characters')
        }
        if(Object.keys(files).length !== 0){
            error.push('Please provide user image')
        }
        if(error.length > 0){
            res.status(400).json({
                error: {
                    errorMessage : error
                }
            })
        }  else {
            const x = files.image.originalFilename;
            console.log(x)
        }

    })
}