import type { AuthRequest } from "../common/types/userAuthRequest";
import type { Response } from "express";
import { HTTP_STATUS } from "../common/utils/constants";
import { HttpStatusMessages } from "../common/utils/constants";
import { getCreatorDetailsHandler } from "../handlers/creatorHandler";

const creatorDetails = async (req: AuthRequest, res: Response): Promise<void> => {
  if (!req.userId) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      message: HttpStatusMessages.UNAUTHORIZED,
    });
    return;
  }
  const details = await getCreatorDetailsHandler(req.userId);
  res.status(HTTP_STATUS.OK).json({
    message: HttpStatusMessages.OK,
    creatorDetails: details,
  });
};

export { creatorDetails };
