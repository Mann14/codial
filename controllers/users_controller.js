const user = require('../models/user')


module.exports.profile = function(req,res){
    return res.render('home',{
        title:"Mann"
    })
}

//render sign up page

module.exports.signUp = (req,res)=>{
    return res.render('user_sign_up',{
        title:"Codial | Sign Up"
    })
}

// Render sign in page

module.exports.signIn = (req,res)=>{
    return res.render('user_sign_in',{
        title:"Codial | Sign In"
    })
}

//get the sign-up data

module.exports.create = (req,res)=>{
    if(req.body.password!= req.body.confirm_password){
        return res.redirect('back');
    }
    const userData = req.body;
    user.findOne({ email: userData.email })
    .then(existingUser => {
      if (existingUser) {
        // Handle existing user
        // res.status(400).json({ message: 'User already exists' });
        return res.redirect('back')
      } else {
        // Create a new user
        return user.create(userData)
          .then(newUser => {
            // Handle newly created user
            // res.status(200).json(newUser);
            return res.redirect('/users/sign-in')
          })
          .catch(err => {
            // Handle error during user creation
            res.status(500).json({ message: 'Error creating user', error: err });
          });
      }
    })
    .catch(err => {
      // Handle error in finding existing user
      res.status(500).json({ message: 'Error finding user', error: err });
    });
}


//sign in and create a session for user
module.exports.createSession = (req,res)=>{
    //TODO later
}