
const ChargeRow = ({ item }) => {
  return (
    <div className="grid grid-cols-[22px_1fr_83.5px_155px_115px] items-baseline font-[Cambria,serif] text-[10pt] text-black h-[16px]">

      {/* Serial Number */}
      <span className="text-center">
        {item.sr}
      </span>

      {/* Description */}
      <span
        className={`border-l border-[#BFBFBF] pl-2 pr-2 ${
          !item.rate ? "col-span-3" : ""
        }`}
      >
        {item.description}
      </span>

      {item.rate && (
        <>
          {/* Rate */}
          <span className="grid grid-cols-[18px_1fr] whitespace-nowrap">
            <span className="text-left" style={{ fontWeight: 600 }}>
              {item.rateCurrency}
            </span>

            <span className="text-right pr-3">
              {item.rate}
            </span>
          </span>

          {/* Basis */}
          <span className="whitespace-nowrap pl-2">
            {item.basis}
          </span>
        </>
      )}

      {/* Amount */}
      <span className="col-start-5 text-right whitespace-nowrap">
        {item.amount}
      </span>

    </div>
  );
};

export default ChargeRow;
