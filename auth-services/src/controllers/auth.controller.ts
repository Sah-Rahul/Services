import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.services";
 
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await registerUser(name, email, password);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user
    });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const data = await loginUser(email, password);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data
    });
  } catch (error: any) {
    return res.status(401).json({ success: false, message: error.message });
  }
};