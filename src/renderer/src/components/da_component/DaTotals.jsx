const DaTotals = () => {

    return (
        <section className="w-full font-[Cambria,serif] relative ">
            {/* continouos border above the subtotal */}
            <div className="border-t border-[#BFBFBF]" style={{ marginLeft: '22px' }}></div>

            {/* Subtotal */}
            <div className="grid grid-cols-[1fr_105px] text-[10pt]">
                <span className="text-right pr-3">
                    Sub Total (A+B+C+D)---
                </span>
                <span className="text-right" style={{ fontWeight: 600 }}>
                    3569580.00
                </span>

            </div>

            {/* GST */}
            <div className="grid grid-cols-[1fr_105px] text-[10pt]">
                <span className="text-right pr-3">
                    18% GST on Above---
                </span>
                <span className="text-right">
                    642524.00
                </span>
            </div>

            {/* Border between GST and Grand Total */}
            <div className="border-t border-[#BFBFBF]" style={{ marginLeft: '22px' }}></div>

            {/* Grand Total */}
            <div className="grid grid-cols-[1fr_105px] text-[10pt]">
                <span className="text-right pr-3">
                    Grand Total (₹)---
                </span>
                <span className="text-right" style={{ fontWeight: 600 }}>
                    642524.00
                </span>
            </div>
            {/* Bottom Border */}
            <div className="border-t-2 border-[#808080]" style={{marginLeft:'22px'}}></div>
        </section>
    );
}

export default DaTotals;