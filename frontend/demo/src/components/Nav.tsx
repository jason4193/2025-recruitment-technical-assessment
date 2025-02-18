import HomeIcon from "./HomeIcon";
import Options from "./Options";

export default function Nav() {
    return (
        <nav className="w-full flex justify-between item-center p-4 border-b-2 border-grey-500">
            <HomeIcon />
            <Options />
        </nav>
    );
}