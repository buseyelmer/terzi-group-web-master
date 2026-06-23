import { nexineAxios } from "@/nexine/nexine.axios";

type AuthApiResult<T> = { ok: true; data: T } | { ok: false };

export async function sendLoginCode(phoneNumber: string): Promise<AuthApiResult<void>> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    return { ok: true, data: undefined };
  }

  try {
    await nexineAxios.post("/auth/login/phone", { phoneNumber });
    return { ok: true, data: undefined };
  } catch {
    return { ok: false };
  }
}

export async function verifyLoginCode(
  phoneNumber: string,
  code: string,
): Promise<AuthApiResult<string | null>> {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    if (code.length === 6) {
      return { ok: true, data: null };
    }
    return { ok: false };
  }

  try {
    const response = await nexineAxios.post("/auth/login/verify", { code, phoneNumber });
    const token =
      response.data?.token ??
      response.data?.accessToken ??
      response.data?.data?.token ??
      null;
    return { ok: true, data: token };
  } catch {
    return { ok: false };
  }
}
