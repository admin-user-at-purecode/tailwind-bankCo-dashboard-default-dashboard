import TotalWidget from "../../component/widget/TotalWidget";
import TeamChat from "../../component/teamChat";
import RevenueFlow from './../../component/revenueFlow/index';
import Efficiency from "../../component/revenueFlow/Efficiency";

function Home() {
    return (
        <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-12 xl:pb-12">
            <div className="2xl:flex 2xl:space-x-[48px]">
                <section className="mb-6 2xl:mb-0 2xl:flex-1">
                    <TotalWidget />
                    <div className="mb-[24px] w-full xl:flex xl:space-x-[24px]">
                      <RevenueFlow/>
                      <Efficiency/>
                    </div>
                </section>
                <section className="flex w-full flex-col space-x-0 lg:flex-row lg:space-x-6 2xl:w-[400px] 2xl:flex-col 2xl:space-x-0">
                    <TeamChat />
                </section>
            </div>
        </main>
    );
}

export default Home;
