import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Input from "@/components/Input";

const Auth = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const handleEmailChange = useCallback((ev) => {
    setEmail(ev.target.value);
  }, []);

  const handlePasswordChange = useCallback((ev) => {
    setPassword(ev.target.value);
  }, []);

  const handleNameChange = useCallback((ev) => {
    setName(ev.target.value);
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      if (variant === "login") {
        await signIn("credentials", {
          email,
          password,
          redirect: false,
          callbackUrl: "/",
        });

        router.push("/");
      } else if (variant === "register") {
        await axios.post("/api/register", {
          email,
          name,
          password,
        });

        await signIn("credentials", {
          email,
          password,
          redirect: false,
          callbackUrl: "/",
        });

        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="w-full h-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="self-center w-full px-6 py-6 mt-2 bg-black rounded-md bg-opacity-70 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                {variant === "register" && (
                  <Input
                    label="Username"
                    onChange={handleNameChange}
                    id="name"
                    value={name}
                  />
                )}
                <Input
                  label="Email"
                  onChange={handleEmailChange}
                  id="email"
                  type="email"
                  value={email}
                />
                <Input
                  label="Password"
                  onChange={handlePasswordChange}
                  id="password"
                  type="password"
                  value={password}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700"
              >
                {variant === "login" ? "Login" : "Sign up"}
              </button>
            </form>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={32} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={32} />
              </div>
            </div>
            <p className="mt-12 text-neutral-500">
              {variant === "login"
                ? "First Time Using Netflix? "
                : "Already Have An Account?"}
              <span
                onClick={toggleVariant}
                className="ml-1 text-white cursor-pointer hover:underline"
              >
                {variant === "login" ? "Create An Account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;


