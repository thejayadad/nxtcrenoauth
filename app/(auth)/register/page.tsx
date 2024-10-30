import { register } from "@/lib/user";
import Link from "next/link";

export default function RegisterPage() {
    return (
      <div className="w-full mx-auto max-w-screen-md">
          <div>
            <form
            action={register}
            className="flex flex-col gap-6 pt-12">
              <div className="flex flex-col">
              <label>Name</label>
              <input placeholder="Name..." name="name" id="name" type="text" />
              </div>
              <div className="flex flex-col">
              <label>Email</label>
              <input placeholder="Email.." name="email" id="email" type="email" />
              </div>
              <div className="flex flex-col">
              <label>Password</label>
              <input placeholder="Password.." name="password" id="password" type="password" />
              </div>
              <p>Already Have an account? 
                <Link href={'/login'}>Login</Link>
              </p>
              <button type="submit">Register User</button>
            </form>
          </div>
      </div>
    );
  }
  