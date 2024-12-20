import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe} from "react-icons/bs"
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGame";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({platforms = []} : PlatformIconListProps) => {
    const iconMap: {[key: string] : IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        nintendo: SiNintendo,
        android: FaAndroid
    }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as ={iconMap[platform.slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
}

export default PlatformIconList;
