import { faHourglass } from "@fortawesome/free-regular-svg-icons"
import { faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Loader = (prop) => {
    if (prop.type != "card") {
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
        <div class="border border-300 shadow rounded-md p-4 w-full">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-gray-700 rounded"></div>
                <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-gray-700 rounded col-span-2"></div>
                    <div class="h-2 bg-gray-700 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-gray-700 rounded"></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Loader