import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatform'
import { Platform } from '../hooks/useGame'

interface Props{
    selectedPlatform: Platform | null;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform} : Props) => {
    const {data, error} = usePlatforms();

    if(error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            {
                data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform) } key={platform.id}>{platform.name}</MenuItem>)
            }
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector