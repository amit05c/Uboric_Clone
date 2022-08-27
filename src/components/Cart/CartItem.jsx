import { Box, Flex, Image } from "@chakra-ui/react";
import { BiX } from "react-icons/bi";
import React, { useState } from "react";

const CartItem = ({ title, price, size, colour="mixed", src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" }) => {
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
    // hello
  );
};

export default CartItem;
