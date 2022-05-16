import { Request, Response } from "express";
import showUserService from "../../services/showUser.service";

const showUserController = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;

    const user = await showUserService(email);

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default showUserController;
