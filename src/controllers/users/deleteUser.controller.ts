import { Request, Response } from "express";
import deleteUserService from "../../services/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;

    const user = await deleteUserService(email);

    return res.status(200).json({ message: "User deleted with sucess!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default deleteUserController;
