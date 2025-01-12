import Login_form from "@/components/forms/login_form";
import Forgot_form from "@/components/forms/forgot_pswd_form";
import Reset_form from "@/components/forms/reset_pswd_form";
import Signup_form from "@/components/forms/signup_form";
import Delete from "@/components/modals/Delete_modal";
import Sidebar_Menu from "@/components/ui/sidebar_menu";
import Header from "@/components/ui/header";
import Header_Control from "@/components/ui/header_control";
import Note_Container from "@/components/ui/note_container";
import Sidebar_Nav from "@/components/ui/sidebar_navigation";
import Note_Form from "@/components/forms/note_form";
import {
  Color_Theme,
  Settings_UI,
  Font_Theme,
} from "@/components/ui/settings_ui";
import { Right_Menu, Toast } from "@/components/ui/utilities";

export default function Home() {
  return (
    <main className="md:flex justify-between">
      <div className="min-h-screen hidden md:inline-block">
        <Sidebar_Nav />
      </div>
      <div className="md:w-full ">
        <Header />
        <div>
          <Sidebar_Menu />
        </div>
      </div>
    </main>
  );
}
