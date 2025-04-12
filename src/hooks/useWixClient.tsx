"use client";

import { WixClientContext } from "@/Context/wixContent";
import { useContext } from "react";

export const useWixClient = () => {
  return useContext(WixClientContext);
};
