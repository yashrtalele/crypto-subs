import type { AuthRequest } from "../common/types/userAuthRequest";
import type { Response } from "express";
import { HTTP_STATUS } from "../common/utils/constants";
import { getFanDetails } from "../common/queries/getFanDetails";
import { HttpStatusMessages } from "../common/utils/constants";

const fanDetails = async (req: AuthRequest, res: Response): Promise<void> => {
  if (!req.userId) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      message: HttpStatusMessages.UNAUTHORIZED,
    });
    return;
  }
  const details = await getFanDetails(req.userId);
  res.status(HTTP_STATUS.OK).json({
    message: HttpStatusMessages.OK,
    creatorDetails: details,
  });
};

export { fanDetails };
