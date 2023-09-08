const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    customKey : {
        type : String
    },
    name : {
        type : String,
        require : true
    },
    email : {
        type :String,
        require: true,
        unique : [true, "Email already present"],
    },
    password : {
        type : String,
        require : true
    },
    phone : {
        type : Number,
        minlength : 10,
        maxlength : 10,
    },
    isAdmin : {
        type : Boolean,
        require : true,
        default : false
    },
},{
    timestamps : true
})

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)

})

//jwt token work
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, "secretkey", {
        expiresIn: 1,
    })
};

// Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

//exporting user collection
const User = new mongoose.model('User', userSchema);
module.exports = User;