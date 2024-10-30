/**
 <-setup->
create the app
clean up homePage

<---register page--->
auth and website foldder
setup the register and login page with layout
start the app
<---login page--->
set up login page
add the layout
style the form
<---header--->
setup the header
add the links

<---mongodb setup--->
npm i mongoose
monogodb
lib
models

<---authjs v5--->
npm install next-auth@beta
AUTH_SECRET
auth.ts
follow setup docs
<---Register action--->
npm i bcrypt-ts
lib
user.ts
add to the front end
test it out

<---crendtials setup--->
auth.ts file
setup the credentials first 
import NextAuth, {CredentialsSignin} from "next-auth"
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import { User } from "./models/User";
import { compare } from "bcrypt-ts";

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
        authorize: async (credentials) => {
          const email = credentials.email as string | undefined;
          const password = credentials.password as string | undefined;
  
          if (!email || !password) {
            throw new CredentialsSignin("Please provide both email & password");
          }
          await connectDB()

          const user = await User.findOne({ email }).select("+password +role");

          if (!user) {
            throw new Error("Invalid email or password");
          }
  
          if (!user.password) {
            throw new Error("Invalid email or password");
          }
          const isMatched = await compare(password, user.password);

          if (!isMatched) {
            throw new Error("Password did not matched");
          }
          const userData = {
            name: user.name,
            email: user.email,
            role: user.role,
            id: user._id,
          };
  
          return userData;
  
        }
      })
  ],
})
login action 
add it
add the action to the login page

<---Google Login--->
setup the google credentials in the console
update

update the login page with the link to google and the redirect session

 */