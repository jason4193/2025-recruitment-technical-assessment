"use client";
import OptionButton from "./OptionButton";
export default function Options() {
    return (
        <div className="flex items-center gap-4">
            <OptionButton icon="search" action={() => console.log("Search")} />
            <OptionButton icon="grid_view" action={() => console.log("Grid View")} />
            <OptionButton icon="map" action={() => console.log("Map")} />
            <OptionButton icon="dark_mode" action={() => console.log("Dark Mode")} />
        </div>
    );
}