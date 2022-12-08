const User = require ('../models/User')
const bcrypt = require('bcrypt');

    //We can make use of mongoose virtuals—basically fields we don't want to save in MongoDB—to accomplish this. We will chain calls to get and set to the returned virtual object, allowing us to establish both a getter and a setter for the virtual field.

User.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );


  //Note: avoid rewriting the callback function using an arrow function as it will not have the correct scope for this.

    //One common feature of Middleware is the "next" function. Essentially when our Middleware has finished whatever it needs to do, we need to call this to have the next Middleware or next function (in this case normal validations) run.

User.pre('validate', function(next){
    if (this.password !== this.confirmPassword){
        this.invalidate('comfirmPassword', 'Password must match confirm password');
    }
    next()
});



const addUser = (req, res)=>{

}