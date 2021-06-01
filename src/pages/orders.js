import { getSession, useSession, signIn } from "next-auth/client";
import Header from "../components/Header";

function Orders({ orders }) {
  const [session] = useSession();

  // console.log(orders);

  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-black">
          Your Orders
        </h1>
      </main>
    </div>
  );
}

export default Orders;
