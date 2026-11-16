
import { chargeSections } from "../../data/chargeData";
import ChargeSection from "./ChargeSection";

const ChargeTable = () => {
  return (
    <section
      className="w-full font-[Cambria,serif] text-black relative"
      style={{ marginTop: "1.5rem" }}
    >
      {/* Table Headings */}
      <div className="grid grid-cols-[22px_1fr_83.5px_155px_105px] items-center bg-[#E7E6E6] text-[10.5pt]">

        <span className="text-center" style={{ fontWeight: 600 }}>
          Sr.
        </span>

        <span className="pl-2" style={{ fontWeight: 600 }}>
          Services
        </span>

        <span></span>
        <span></span>

        <span className="text-right pr-1" style={{ fontWeight: 600 }}>
          Amount <span className="text-[#C00000]">₹ </span>
        </span>

      </div>

      {/* Charge Sections */}
      {chargeSections.map((section) => (
        <ChargeSection
          key={section.code}
          section={section}
        />
      ))}

    </section>
  );
};

export default ChargeTable;
