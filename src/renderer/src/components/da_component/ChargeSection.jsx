import ChargeRow from "./ChargeRow";

const ChargeSection = ({ section }) => {
  return (
    <div className={`pb-3 ${section.code === "A" ? "pt-3" : "pt-1.5"}`}
        style={{margin:'0.4rem 0rem'}}
    >

      {/* Section Headings */}
      <div className="flex items-baseline gap-1 font-[Cambria,serif] leading-none">
        <span
          className="w-[25px] text-center text-[10.5pt]"
          style={{ fontWeight: 600 }}
        >
          {section.code}
        </span>

        <span
          className="text-[10pt]"
          style={{ fontWeight: 600 }}
        >
          {section.title}
        </span>
      </div>

      {/* Charge Items */}
      <div className="flex flex-col gap-[2px]">
        {section.items.map((item) => (
          <ChargeRow
            key={`${section.code}-${item.sr}`}
            item={item}
          />
        ))}
      </div>

    </div>
  );
};

export default ChargeSection;
