import ChargeTable from "../components/da_component/ChargeTable";
import CompanyHeader from "../components/da_component/CompanyHeader";
import DaBanner from "../components/da_component/DaBanner";
import DaFooter from "../components/da_component/DaFooter";
import DaTotals from "../components/da_component/DaTotals";
import DocumentParticulars from "../components/da_component/DocumentParticulars";

export default function NewDA() {

    return (
        <>
            <main className="w-full h-screen overflow-auto bg-gray-200 p-8">
                <div className="flex justify-center min-w-fit">
                    <div
                        className="bg-white shadow-lg shrink-0"
                        style={{
                            width: "612pt",
                            minHeight: "792pt",
                            padding: "30pt 90pt",
                            boxSizing: "border-box",
                        }}
                    >
                        <CompanyHeader />
                        <DaBanner />
                        <DocumentParticulars />
                        <div className="relative w-full">

                            {/* Continuous Amount Divider */}
                            <div className="absolute top-0 bottom-0 right-[105px] w-px bg-[#BFBFBF] pointer-events-none"></div>

                            <ChargeTable />
                            <DaTotals />

                        </div>

                        <DaFooter/>
                    </div>
                </div>
            </main>
        </>
    );
}