import asyncHandler from "express-async-handler";

//@Desc      Auth User/Set Token
//route      POST /api/users/auth
//@access    Public
const authUser = asyncHandler(async (req,res) => {
    res.status(200).json({message: "Auth User"})
});

//@Desc      Register User
//route      POST /api/users
//@access    Public
const registerUser = asyncHandler(async (req,res) => {
    res.status(200).json({message: "Register User"})
});

//@Desc      Logout User
//route      POST /api/users/logout
//@access    Public
const logoutUser = asyncHandler(async (req,res) => {
    res.status(200).json({message: "Logout User"})
});

//@Desc      get User Profile
//route      GET /api/users/profile
//@access    Private
const getUserProfile = asyncHandler(async (req,res) => {
    res.status(200).json({message: "User Profile"})
});

//@Desc      Update user Profile
//route      PUT /api/users/profile
//@access    Public
const updateUserProfile = asyncHandler(async (req,res) => {
    res.status(200).json({message: "Update User Profile"})
});

export { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
 };