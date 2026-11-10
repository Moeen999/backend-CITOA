
// ! Schema without mongoose

// class User {
//   constructor(id, email, password) {
//     this.id = id;
//     this.email = email;
//     this.password = password;
//   }
// }

// export default User;


// ! Schema with mongoose
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    
});

  const User = mongoose.models.User || mongoose.model("User", userSchema);
  export default User;