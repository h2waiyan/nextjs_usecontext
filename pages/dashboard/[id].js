import { useRouter } from "next/router";

const DashboardWithID = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <h1 className="text-xl bg-red-400">Dashboard with {id} </h1>
    </>
  );
};

export default DashboardWithID;


