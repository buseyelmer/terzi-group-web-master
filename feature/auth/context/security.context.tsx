import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { RegisterProvider } from "./register.context";
import { CheckAuthResponse, useAuth } from "../hook/use.auth";
import { User } from "@/nexine/prisma.interface";
import { usePathname, useRouter } from "next/navigation";
import { useProfile } from "@/feature/profile/hook/use.profile";

interface SecurityContextType {
  authState: CheckAuthResponse | null;
}

export const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

export const SecurityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [authState, setAuthState] = useState<CheckAuthResponse|null>({
    isAuthenticated : false,
    code : "LOADING",
    user : null,
  });



  const pathname = usePathname();
  const router = useRouter();

  const currentToken = useMemo(() => {
    if(typeof window !== "undefined"){
      return localStorage.getItem("token");
    }
    return null;
  }, [pathname,typeof window !== "undefined"]);

  const { checkAuth } = useAuth();

  const profile = useProfile().fetch();

  useEffect(() => {
    if(authState?.code != "LOADING"){
      if(authState?.code != "TOKEN_VALID"){

        if(pathname.includes("/profile")){
          router.push("/auth/login");
        }
      }else{
        if(pathname.includes("/auth")){
          router.push("/profile");
        }
      }
    }
  }, [authState, pathname]);
  

  useEffect(() => {
    checkAuth().then((res : CheckAuthResponse) => {
      setAuthState(res);
    });
  }, []);

  return (
    <SecurityContext.Provider value={{ authState }}>
      <RegisterProvider>{children}</RegisterProvider>
    </SecurityContext.Provider>
  );
};
