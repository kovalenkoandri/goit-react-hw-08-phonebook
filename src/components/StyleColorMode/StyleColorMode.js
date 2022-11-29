import { iconStyles } from 'styles/iconStyles';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useColorMode, Button, Icon } from '@chakra-ui/react';
export const StyleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      colorScheme="teal"
      size="md"
      variant="ghost"
      onClick={toggleColorMode}
      rightIcon={
        colorMode === 'dark' ? (
          <Icon as={FaSun} sx={iconStyles} />
        ) : (
          <Icon as={FaMoon} sx={iconStyles} />
        )
      }
    >
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
};
