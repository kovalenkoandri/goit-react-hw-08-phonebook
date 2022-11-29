import { useColorMode } from '@chakra-ui/react';
export const InputStyles = () => {
  const { colorMode } = useColorMode();
  let color;
  colorMode === 'dark' ? (color = 'green') : (color = 'blue');
  
  return { color };
};
