import User from './../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password
        })

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to register user",
            error: error.message
        })
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to login user",
            error: error.message
        })
    }
};