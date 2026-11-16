import companyLogo from "../../assets/images/kingman_marine_logo.png"

const CompanyHeader = () => {
    return (
        <header className="w-full flex items-center gap-6">

            {/* Logo Placeholder */}
            <div className="w-[44pt] h-[44pt] shrink-0" style={{marginLeft:'5pt'}} >
                <img src={companyLogo} alt="KINGMAN MARINE PRIVATE LIMITED LOGO"  />
            </div>

            {/* Company Details */}
            <div className="flex-1 font-[Cambria,serif] text-right" >

                <h1 className="text-[20pt] text-[#808080] leading-none pb-[6pt] whitespace-nowrap" style={{fontWeight: 600}} >
                    KINGMAN MARINE PRIVATE LIMITED
                </h1>

                <p className="text-[8pt] text-black leading-none" style={{fontWeight: 400}}>
                    1205, Dalamal Tower, Free Press Journal Marg,
                    Nariman Point, Mumbai - 400021
                </p>

                <p className="mt-[3px] text-[8pt] text-black leading-none" style={{fontWeight: 400}}>
                    TEL: +91 22 40045434, 49721945
                    <span className="mx-[5px]" style={{fontWeight: 400}}>|||</span>&nbsp; 
                    EMAIL: <a href="mailto:agency@kingmanmarine.in" className="text-[#0000A0]" style={{fontWeight: 600}}>
                        agency@kingmanmarine.in
                    </a>
                </p>
            </div>
        </header>
    );
};

export default CompanyHeader;
