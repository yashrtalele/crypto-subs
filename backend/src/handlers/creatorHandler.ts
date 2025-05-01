import { getCreatorDetails } from "../common/queries/getCreatorDetails";

export const getCreatorDetailsHandler = async (userId: string) => {
  return await getCreatorDetails(userId);
};
