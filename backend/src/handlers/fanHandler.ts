import { getFanDetails } from "../common/queries/getFanDetails";

export const getFanDetailsHandler = async (userId: string) => {
  return await getFanDetails(userId);
};
