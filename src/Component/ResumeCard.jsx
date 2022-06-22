import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";

const ResumeCard = ({ item }) => {
  const onDownload = item => {
    const link = document.createElement("a");
    link.download = item.name + ".docx";
    link.href = `/resources/resumes/${item.filePath}`;
    link.click();
  };

  return (
    <Box border="4px #2077ea solid" borderRadius={4}>
      <Image
        src={`/resources/resumes/${item.imagePath}`}
        transition="transform 300ms ease-in-out"
        _hover={{
          transform: "scale(120%, 120%)",
          border: "2px #2077ea solid",
        }}
        _focus={{
          transform: "scale(200%, 200%)",
          border: "2px #2077ea solid",
        }}
        alt={item.name + " resume"}
      />
      <Flex p={2} justify="space-between" align="center">
        <Text fontSize="lg" color="#2077ea" fontWeight="bold">
          {item.name}
        </Text>
        <IconButton
          icon={<DownloadIcon color="white" />}
          bg="#2077ea"
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
