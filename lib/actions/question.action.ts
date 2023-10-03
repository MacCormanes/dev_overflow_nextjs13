"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  // eslint-disable-next-line no-empty
  try {
    // connect to db
    connectToDatabase();
  } catch (error) {}
}
