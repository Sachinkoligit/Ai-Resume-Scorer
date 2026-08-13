import userModal from "../models/user.js";

export const register = async (req, res) => {
  try {
    const { name, email, photoUrl } = req.body;
    const userExist = await userModal.findOne({ email });
    if (userExist)
      return res.status(200).json({ message: "Welcome Back", user: userExist });
    const newUser = await userModal.create({ name, email, photoUrl });
    return res
      .status(200)
      .json({ message: "User Registered Successfully", user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error", message: err.message });
  }
};
