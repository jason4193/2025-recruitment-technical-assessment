export default function SearchBar() {
    return (
        <div className="flex px-4 py-2 gap-3 border border-gray-300 rounded-md w-full">
            <span className="material-icons"><div className="text-gray-500">search</div></span>
            <input 
                type="text" 
                placeholder="Search for a building..."
                className="w-full focus:outline-none text-gray-500"
            />
        </div>

    );
}