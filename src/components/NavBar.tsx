import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchinput from "./Searchinput";
interface Props {
    onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={logo} boxSize="60px" />
            <Searchinput onSearch={onSearch}></Searchinput>
            <ColorModeSwitch />
        </HStack>
    );
};

export default NavBar;
