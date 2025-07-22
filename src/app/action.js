"use server";
import axios from "axios";
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";
import { cookies } from "next/headers";

export async function handleLogin(formData) {
  const username = formData.get("username");
  const passcode = formData.get("password");

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
          username: response.data.user?.username,
          role: response.data.user?.role,
        }),
        {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24,
        }
      );
    }

    return response.data;
  } catch (error) {
    return error.status;
  }
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user")?.value;
  if (!userCookie) return null;

  try {
    return JSON.parse(decodeURIComponent(userCookie));
  } catch (error) {
    return null;
  }
}

export async function logOut() {
  const cookieStore = cookies();
  cookieStore.delete("user", {
    path: "/", // Make sure path matches where cookie was set
  });
}
