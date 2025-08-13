import User from "../models/user.model.js";
class UserRepository{
 async checkIsUserExistByEmail(email){
    try{
        return await User.findOne({email});
    }
    catch(error){
        console.log(`userRepository.checkIsUserExistByEmail produced an error: ${error}`);
        return null;
    }
}

 async  createUser(createUserInput){
    const {fullName, password, email, profileImageUrl} = createUserInput;
    return await User.create({
        fullName,
        password,
        email,
        profileImageUrl
    })
    
}

 async loginUser(email,password){
    try{
         console.log(`userRepository.loginUser is called with email: ${email}`);
        let user = await User.findOne({email});
        console.log(user);
        let isValidPassword = await user.comparePassword(password);

        return user && isValidPassword ? user : null;
    }
    catch(err){
        console.log(`userRepository.loginUser produced error: ${err}`);
        return null;
    }
}

async findUserById(_id){
    try{
        console.log(`userRepository.findUserById called with id: ${JSON.stringify(_id)}`);
        return await User.findById(_id).select("-password");
    }
    catch(err){
         console.log(`userRepository.findUserById produced error: ${err}`);
        return null;

    }
}

}

export default UserRepository;