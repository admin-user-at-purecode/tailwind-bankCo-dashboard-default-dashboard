import TotalWidget from "../../component/widget/TotalWidget";
import RevenueFlow from "../../component/revenueFlow";
import ListTab from "../../component/listTab";
import Wallet from "../../component/wallet";
import TeamChat from "../../component/teamChat";

function Home() {
  return (
    <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-12 xl:pb-12">
      <div className="2xl:flex 2xl:space-x-[48px] mb-6">
        <section className="mb-6 2xl:mb-0 2xl:flex-1 w-full">
          <TotalWidget />
          <ListTab />
        </section>
        <section className="flex w-full flex-col space-x-0 lg:flex-row lg:space-x-6 2xl:w-[400px] 2xl:flex-col 2xl:space-x-0">
          <Wallet />
        </section>
      </div>
      <RevenueFlow />
      <div className="my-8">
      <Wallet />
      </div>
    </main>
  );
}

export default Home;
