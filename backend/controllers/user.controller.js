import userModal from "../models/user.js";

export const register = async (req, res) => {
  try {
    const { name, email, photoUrl } = req.body;
    const userExist = await userModal.findOne({ email });
    if (userExist)
      return res.status(200).json({ message: "Welcome Back", user: userExist });
    const newUser = await userModal.create({ name, email, photourl: photoUrl });
    return res
      .status(200)
      .json({ message: "User Registered Successfully", user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

export const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await userModal.findOne({ email });
    res.status(200).json({ data: existingUser });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
