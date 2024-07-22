import { auth } from "@/auth";

export const getSession = async (req: any, res: any) => {
  const session = await auth(req, res);
  return session;
};
