import Login_form from "@/components/forms/login_form";
import Forgot_form from "@/components/forms/forgot_pswd_form";
import Reset_form from "@/components/forms/reset_pswd_form";
import Signup_form from "@/components/forms/signup_form";

export default function Home() {
  return (
    <main className="flex md:justify-center items-center h-screen">
      <Reset_form />
    </main>
  );
}
