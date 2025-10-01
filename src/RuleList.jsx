import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const RuleList = () => (
<div>

    <section className="m-16 mt-4">
        <header className="bg-blue-400 text-3xl p-4 text-white flex justify-between items-center">
            Leave the code cleaner than you found it. <i className="fa-chevron-down m-4"/>
        </header>
        <p className="p-4 text-2xl">From Clean Code: always leave the code cleaner than it was before.</p>
        <footer className="p-4 border flex justify-between items-center">
            <div>
                <span className="p-4 bg-gray-400 rounded text-white text-2xl mx-4">craftsmanship</span>
                <span className="p-4 bg-gray-400 rounded text-white text-2xl mx-4">clean code</span>
            </div>
            <div className="flex justify-end">
                <button type="button" className="bg-blue-400 p-4 rounded text-2xl">
                    <FontAwesomeIcon icon="fa-pencil" className="m-4" />
                    {/*<i className="fa-pencil"></i>*/}
                </button>
                <div className="flex">
                    <button type="button" className="border p-4" title="+1">
                        0 <FontAwesomeIcon icon="fa-thumbs-up" className="m-4" />

                        {/*0 <i className="fa-thumbs-up"></i>*/}
                    </button>
                    <button type="button" className="border p-4" title="-1">
                        0 <FontAwesomeIcon icon="fa-thumbs-down" className="m-4" />

                        {/*0 <i className="fa-thumbs-down"></i>*/}
                    </button>
                </div>
            </div>
        </footer>
    </section>
</div>
)
