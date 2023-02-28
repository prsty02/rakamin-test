import { faHourglass } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Loader = (prop) => {
    if (prop.type !== "card") {
        return(
            <div className="flex flex-col h-full justify-center items-center">
                <FontAwesomeIcon
                    className="animate-ping p-3"
                    icon={faHourglass}
                    size="2x"
                />
                <h3 className="p-3 font-bold">Please Wait</h3>
            </div>
        )
    }
    return(
        <div className="border border-300 shadow rounded-md p-4 w-full">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-gray-700 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-gray-700 rounded col-span-2"></div>
                            <div className="h-2 bg-gray-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-gray-700 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader