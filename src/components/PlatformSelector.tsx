import usePlatforms from "@/hooks/usePlatforms";
import { Button, MenuButton, MenuList, Menu, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
                platforms
            </MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem key={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
