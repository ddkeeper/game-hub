import { Platform } from "@/hooks/useData";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, MenuButton, MenuList, Menu, MenuItem } from "@chakra-ui/react";
//import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem
                        fontWeight={
                            platform.id === selectedPlatform?.id
                                ? "bold"
                                : "normal"
                        }
                        onClick={() => onSelectPlatform(platform)}
                        key={platform.id}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
