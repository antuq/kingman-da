
const DocumentParticulars = () => {

  const particulars = [
    ["PDA No.", ""],
    ["Date", "22-07-2026"],
    ["Vessel", "MV. KIRAN EUROPE"],
    ["Port", "BHAVNAGAR - ANCHORAGE"],
    ["GRT", "33044"],
    ["NRT", "19231"],
    ["Port Stay", "7 ~ 8 Days (agwwp)"],
  ];

  return (
    <section className="w-full grid grid-cols-[54%_46%] font-[Cambria,serif] text-black border-b border-[#BFBFBF]">

      {/* LEFT COLUMN */}
      <div className="flex flex-col justify-between pr-3">

        {/* Recipient */}
        <div>
          <p className="text-[10pt] leading-tight">
            To,
          </p>

          <p className="mt-1 text-[11pt] leading-tight" style={{ fontWeight: 600 }}>
            Gandhar Coal & Mines Private Limited
          </p>
        </div>

        {/* Cargo Details */}
        <div className="grid grid-cols-[140px_1fr] gap-y-1 text-[10pt] pb-[2px]">

          <span>Cargo</span>
          <span className="border-l border-[#BFBFBF] pl-4" style={{ fontWeight: 600 }}>
            Coal in Bulk
          </span>

          <span>Quantity</span>
          <span className="border-l border-[#BFBFBF] pl-4" style={{ fontWeight: 600 }}>
            54800 MT (Approx)
          </span>

        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="border-l border-[#BFBFBF]">

        {particulars.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-[82px_minmax(0,1fr)] h-[18px]"
          >
            <span className="border-r border-[#BFBFBF] px-[3px] text-[10pt]">
              {label}
            </span>

            <span className="px-[4px] text-[10.5pt]" style={{ fontWeight: 600 }}>
              {value}
            </span>
          </div>
        ))}

        {/* Exchange Rate */}
        <div className="grid grid-cols-[82px_minmax(0,1fr)] h-[18px]">
          <span className="border-r border-[#BFBFBF] px-[3px] text-[10pt]">
            Exchg. Rate
          </span>

          <span className="px-[4px] text-[11pt]" style={{ fontWeight: 600 }}>
            96.00 ₹ Per US $
          </span>

        </div>

      </div>
    </section>
  );
};

export default DocumentParticulars;