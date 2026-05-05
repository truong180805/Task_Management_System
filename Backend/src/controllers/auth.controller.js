// src/controllers/auth.controller.js
const prisma = require('../config/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Feature: User Registration
const register = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    // 1. Check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email này đã được sử dụng." });
    }

    // 2. Hash the password for security
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 3. Save new user to database
    const newUser = await prisma.user.create({
      data: {
        email: email,
        passwordHash: passwordHash, // Match the schema definition
        fullName: fullName,
      },
    });

    res.status(201).json({ 
      message: "Đăng ký thành công!", 
      user: { id: newUser.id, email: newUser.email } 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Lỗi hệ thống khi đăng ký." });
  }
};

// Feature: User Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Email hoặc mật khẩu không đúng." });
    }

    // 2. Compare entered password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Email hoặc mật khẩu không đúng." });
    }

    // 3. Generate JWT Token (expires in 7 days)
    const token = jwt.sign(
      { userId: user.id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '7d' } 
    );

    res.status(200).json({ message: "Đăng nhập thành công!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Lỗi hệ thống khi đăng nhập." });
  }
};

module.exports = { register, login };