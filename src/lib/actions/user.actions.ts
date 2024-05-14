"use server"

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../server/appwrite"
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({email, password}: signInProps) => {
    try{
        //Mutation
        const { account } = await createAdminClient();
        console.log("account: "+parseStringify(account))

        const response = await account.createEmailPasswordSession(email, password);
        console.log("response: "+parseStringify(response))

        if(!response){
            console.log("response is null")
            return null
        }

        cookies().set("appwrite-session", response.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(response)
    }catch(error){
        console.log("signIn Error: "+error)
    }
}

export const signUp = async (userData: SignUpParams) => {
    try{
        //Mutation
        const { account } = await createAdminClient();
        console.log("userData: "+parseStringify(userData))
        const {
            email,
            password,
            firstName,
            lastName,

        } = userData;
        

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            firstName + " " + lastName
        );

        console.log("newUserAccount: "+parseStringify(newUserAccount))

        if(!newUserAccount){
            console.log("newUserAccount is null")
            return null
        }
        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        console.log("session: "+session)
        console.log("cookies: "+cookies().get("appwrite-session"))
        console.log("newUserAccount parseStringify: "+parseStringify(newUserAccount))

        return parseStringify(newUserAccount)

    }catch(error){
        console.log("signUp Error: "+error)
    }
}



export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      console.log("account: "+parseStringify(account))
      const user = await account.get();

      console.log("account: "+account.get().then((res) => console.log("res: "+res)))
      console.log("parsed user: " + parseStringify(user))

      return parseStringify(user);
    } catch (error) {
        console.log("getLoggedInUser Error: " + error)
      return null;
    }
  }
  

  export const signOut = async () => {
    try {
        const { account } = await createSessionClient();
        console.log("account: "+parseStringify(account))

        cookies().delete("appwrite-session")
        await account.deleteSession("current")
        console.log("deleted cookies: "+cookies().get("appwrite-session"))
        console.log("deleted session: "+account.deleteSession("current"))
    } catch (error) {
        console.log("signOut Error: "+error)
        return null;
    }
  }