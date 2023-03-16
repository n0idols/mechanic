"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useServices() {
  return useQuery(["serviceData"], () => axios.get("/api/services/get"), {
    cacheTime: 5000,
  });
}
