"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLogin(formData) {
  const username = formData.get("username");
  const passcode = formData.get("password");
  const callbackUrl = formData.get("callbackUrl") || "/";
  console.log(callbackUrl);

  try {
    const response = await axios.post(
      "http://localhost:3001/login",
      {
        username,
        passcode,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    if ((response.data.type = "success")) {
      const cookieStore = cookies();

      cookieStore.set(
        "user",
        JSON.stringify({
          username: response.data.user.username,
          role: response.data.user.role,
        }),
        {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24,
        }
      );
    }
  } catch (error) {
    return error.message;
  }
}
