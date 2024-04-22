import style from "../page.module.css";
import Home from "../../components/Home/Home";

export const metadata = {
  title: "for home page",
  description: "home disc",
};

export default function FirstPage() {
  return (
    <>
      <Home />
    </>
  );
}
