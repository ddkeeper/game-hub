import { Platform } from "@/hooks/useData";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, MenuButton, MenuList, Menu, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const SortSelector = () => {
    //const { data, error } = usePlatforms();
    //if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
                order by: relevance
            </MenuButton>
            <MenuList>
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
                <MenuItem>4</MenuItem>
                <MenuItem>5</MenuItem>
                <MenuItem>6</MenuItem>
                <MenuItem>7</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
