import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
    MdPhoneIphone,
    SiNintendo,
    BsGlobe
} from "react-icons/all";
import {Platform} from "../hooks/useGames";
import {Icon, HStack} from "@chakra-ui/react";
import {IconType} from "react-icons";
import React from "react";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: {[key:string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }
    return (
        <HStack marginY={1}>
            {/*1 = 4px*/}
            {platforms.map(platform => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>)}
        </HStack>
    );
};

export default PlatformIconList;