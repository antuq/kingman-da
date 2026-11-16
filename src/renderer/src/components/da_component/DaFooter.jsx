const DaFooter = () => {

    const notes = [
        {
            letter: "a",
            text: "Launch Services; Bank charges; Sign on/off Master; crew etc, Spares Clearance if any; Cash to Master connected Expenses if any; any master's requirements."
        },
        {
            letter: "b",
            text: "The agency fees quoted is basis per vessel, per port and for a normal turn around time of one week i.e. from the date of arrival to the date of departure. If the stay exceeds one week beyond above period, an additional fees of USD 350 per DA or part thereof is applicable."
        },
        {
            letter: "c",
            text: "The computations of port expenses are basis port stay and all statutory charges will be applied as per regulations."
        },
        {
            letter: "d",
            text: "If the PC is to be delivered at Outer Anchorage then TUG hire charges will be applicable accordingly."
        },
        {
            letter: "e",
            text: "Exchange Rate taken here is basis current prevailing rates. In Final DA Exchange Rate as per PORT INVOICE will be applicable."
        }
    ];

    return (
        <section className="w-full font-[Cambria,serif]">
            {/* Notes Heading and Introduction */}
            <h3 className="text-[10pt]" style={{ fontWeight: 600, marginLeft: '22px' }}>
                Notes: The Agency Fees does not include the following:

            </h3>

            {/* Alphabetic List */}
            <ol
                type="a"
                className="list-[lower-alpha] pl-[14px] text-[8.5pt] leading-tight marker:font-semibold"
            >
                {notes.map((note, index) => (
                    <li key={index} className="pl-2">
                        {note.text}
                    </li>
                ))}
            </ol>

        </section>
    );
}
export default DaFooter;