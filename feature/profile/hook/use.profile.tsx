import { nexineAxios } from "@/nexine/nexine.axios";
import { User } from "@/nexine/prisma.interface";
import { useMutation, useQuery } from "@tanstack/react-query";

export interface CheckAuthResponse {
  isAuthenticated: boolean;
  code: string;
  user: User | null;
}

export const useProfile = () => {
  return {
    
    fetch: () => {
      return useQuery({
        queryKey: ["profile"],
        enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
        queryFn: async () => {
          var response = await nexineAxios.get<User>("/customer/profile");
          return response.data;
        }
      });
    }
  };
};
