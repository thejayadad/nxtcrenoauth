// app/login/page.tsx
import { auth, signIn } from "@/auth";
import { userLogin } from "@/lib/user";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    // const session = await auth();
    // const user = session?.user;
    // if (user) redirect("/");

    return (
        <div className="mx-auto max-w-screen-md pt-12">
            <form
            className="flex flex-col"
            action={userLogin}
            >
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input placeholder="Email.." name="email" id="email" type="email" required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input placeholder="Password.." name="password" id="password" type="password" required />
                </div>
                <p>
                    Already have an account?
                    <Link href={'/register'}> Register</Link>
                </p>
                <button type="submit">Login</button>
            </form>
            <div className="pt-12">
                <p>Social Login</p>
                <div>
                    <form action={async () => { "use server"; await signIn("google"); }}>
                        <button
                            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            type="submit"
                        >
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">Google</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
