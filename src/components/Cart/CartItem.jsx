import { Box, Flex, Image } from "@chakra-ui/react";
import { BiX } from "react-icons/bi";
import React, { useState } from "react";

const CartItem = ({ title, price, size, colour, src }) => {
  const [count, setCount] = useState(1);

  return (
    <Box padding={"2rem"}>
      <Flex padding={"2rem"} borderBottom={"1px solid grey"}>
        <Box width={"20%"} alignItems={"center"}>
          <Image src={src} alt={title} width={"100%"} height={"100%"} />
        </Box>
        <Box width={"80%"} padding={"1rem"}>
          <Flex justifyContent={"space-between"}>
            <Box fontSize={"lg"} fontWeight={"bold"} textAlign={"start"}>
              {title}
            </Box>
            <Box>₹{price}</Box>
          </Flex>
          <Box textAlign={"start"} color="gray.500">
            Size: {size}
          </Box>
          <Box textAlign={"start"} color="gray.500" mb={"1rem"}>
            Colour: {colour}
          </Box>
          <Flex justifyContent={"space-between"}>
            <Flex alignItems={"center"} border="1px solid black">
              <button
                style={{ fontSize: "1.5rem", padding: "0 1rem" }}
                disabled={count <= 1}
                onClick={() => setCount((prev) => prev - 1)}
              >
                -
              </button>
              <Box>{count}</Box>
              <button
                style={{ fontSize: "1.5rem", padding: "0 1rem" }}
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>
            </Flex>
            <Flex alignItems={"center"}>
              <BiX style={{ marginRight: "0.5rem" }} />
              <button>Remove</button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CartItem;
