import { nexineAxios } from "@/nexine/nexine.axios";
import { User } from "@/nexine/prisma.interface";
import { useMutation } from "@tanstack/react-query";

export interface CheckAuthResponse {
  isAuthenticated: boolean;
  code: string;
  user: User | null;
}

export const useAuth = () => {
  return {
    checkAuth: async () => {
      var token = localStorage.getItem("token");
      if (token) {
        try {
          var tt = await nexineAxios.get("/auth/token");
          return {
            isAuthenticated: true,
            code: "TOKEN_VALID",
            user: tt.data,
          } as CheckAuthResponse;
        } catch (error) {
          return {
            isAuthenticated: false,
            code: "TOKEN_EXPIRED",
          } as CheckAuthResponse;
        }
      }
      return {
        isAuthenticated: false,
        code : "NOT_HAVE_TOKEN"
      } as CheckAuthResponse;
    },
    loginPhoneNumber: () => {
     return useMutation({
      mutationFn : (phoneNumber: string) => {
        return nexineAxios.post("/auth/login/phone", { phoneNumber });
      }
     });
    },
    verifyCode: () => {
      return useMutation({
        mutationFn: ({code,phoneNumber}: {code: string,phoneNumber: string}) => {
          return nexineAxios.post("/auth/login/verify", { code,phoneNumber });
        }
      });
    }
  };
};
