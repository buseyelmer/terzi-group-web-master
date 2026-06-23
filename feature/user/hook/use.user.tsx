import { IData } from "@/nexine/general.interface";
import { nexineAxios } from "@/nexine/nexine.axios";
import { User } from "@/nexine/prisma.interface";
import { useMutation, useQuery } from "@tanstack/react-query";

export interface CheckAuthResponse {
  isAuthenticated: boolean;
  code: string;
  user: User | null;
}

export const useUser = () => {
  return {
    fetch: () => {
      return useQuery({
        queryKey: ["user"],
        enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
        queryFn: async () => {
          var response = await nexineAxios.get<IData<User>>("/customer/user");
          return response.data;
        },
      });
    },
  };
};
