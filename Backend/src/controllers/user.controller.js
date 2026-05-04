const prisma = require('../config/prisma');

// createUser Function
const createUser = async (req, res) => {
  try {
    // Input infor 
    const { email, passwordHash, fullName } = req.body;

    // save newUser to user table
    const newUser = await prisma.user.create({
      data: {
        email: email,
        passwordHash: passwordHash, 
        fullName: fullName,
      },
    });

    // return result and inf newUser
    res.status(201).json(newUser);
  } catch (error) {
    // inf if have error
    res.status(500).json({ error: "Không thể tạo người dùng. Có thể email đã được sử dụng." });
  }
};

module.exports = {
  createUser
};