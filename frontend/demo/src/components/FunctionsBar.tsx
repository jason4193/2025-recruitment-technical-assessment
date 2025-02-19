import SearchBar from "./SearchBar";
import FunctionsButton from "./FuntionsButton";

export default function FunctionsBar() {
    return (
        <div className="grid grid-cols-3 md:flex md:flex-row md:justify-between gap-2 p-4">
            <div className="col-span-3 md:order-2 md:w-[60%] lg:w-[50%]">
                <SearchBar />
            </div>
            <div className="col-start-1 col-end-2 md:order-1 md:w-[15%] lg:w-[10%]">
                <FunctionsButton icon="filter_alt" name="Filters"/>
            </div>
            <div className="col-start-3 col-end-3 md:order-3 md:w-[15%] lg:w-[10%]">
                <FunctionsButton icon="filter_list" name="Sort"/>
            </div>
        </div>
    );
}