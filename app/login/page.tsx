import { LoginApple } from "../components/LoginApple";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
        <h1>Apple login</h1>
        <LoginApple />
    </div>
  );
}
