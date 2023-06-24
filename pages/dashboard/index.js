import { useRouter } from "next/router";
function Dashboard() {
  const router = useRouter();
  return <>
    <h1>Dashboard Page</h1>

    <button onClick={() => router.back()}>Go Back</button>
  </>;
}

export default Dashboard;
