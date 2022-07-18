import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";

const getColor = () => {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  return color;
}

const ResumeCard = ({ item, ...rest }) => {
  const borderColor = getColor()

  const onDownload = item => {
    const link = document.createElement("a");
    link.download = item.name + ".docx";
    link.href = `/resources/resumes/${item.filePath}`;
    link.click();
  };

  return (
    <Box border={`4px ${borderColor} solid`}  borderRadius={4} {...rest}>
      <Image
        src={`/resources/resumes/${item.imagePath}`}
        transition="transform 300ms ease-in-out"
        _hover={{
          transform: "scale(120%, 120%)",
          border: `2px ${borderColor} solid`,
        }}
        _focus={{
          transform: "scale(200%, 200%)",
          border: `2px ${borderColor} solid`,
        }}
        alt={item.name + " resume"}
      />
      <Flex p={2} justify="space-between" align="center">
        <Text fontSize="lg" color="" fontWeight="bold">
          {item.name}
        </Text>
        <IconButton
          icon={<DownloadIcon color="white" />}
          bg="blue.500"
          justifySelf="flex-end"
          _hover={{
            bg: "blue.600",
          }}
          _focus={{
            bg: "blue.600",
          }}
          onClick={() => onDownload(item)}
        />
      </Flex>
    </Box>
  );
};

export default ResumeCard;
