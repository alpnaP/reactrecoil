import { v4 as uuidv4 } from "uuid";

//Method to generate unique ID
export const generateUID = () => {
  return uuidv4();
};
