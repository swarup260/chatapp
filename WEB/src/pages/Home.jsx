import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <Link to="/sign-up">{"Don't have an account? Sign Up"}</Link>
    </>
  );
}
