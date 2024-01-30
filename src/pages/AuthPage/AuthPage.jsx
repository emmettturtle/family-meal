import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignUpFormFunc from "../../components/SignUpFormFunc/SignUpFormFunc";

export default function AuthPage({setUser, setRestarauntProfile}) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpFormFunc setUser={setUser}/>
      <LoginForm setUser={setUser} setRestarauntProfile={setRestarauntProfile}/>
    </main>
  );
}