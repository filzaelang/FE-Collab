import {
  Avatar,
  AvatarImage,
  Box,
  HStack,
  Heading,
  Image,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { LayoutBg } from "../Layout/LayoutBg";
import { Text } from "@gluestack-ui/themed";
import { ImageLogo } from "../components/Image";
import { AntDesign } from "@expo/vector-icons";
import { CradUser } from "../components/CradUser";
import { UserGamee } from "../json/User";
import { io } from "socket.io-client";

export const MatchPage = ({ navigation }: any) => {
  const [userInRoom, setUserInRoom] = useState<any>()
  console.log("++++++")
  console.log(userInRoom)
  console.log("++++++")
  const socket = io("http://localhost:3000/");

  socket.on('clients-total', (data) => {
    setUserInRoom(data)
  })

  return (
    <View style={{ width: "100%", height: "100%", minHeight: "100%" }}>
      <LayoutBg>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          w={"100%"}
          h={"5%"}
          mt={45}
          px={10}
        >
          <ImageLogo alt="logo" size={"lg"}></ImageLogo>

          <Box>
            <TouchableOpacity
              style={{ paddingRight: 20 }}
              onPress={() => navigation.navigate("Home")}
            >
              <AntDesign name="closecircle" size={24} color="black" />
            </TouchableOpacity>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={20}
          w={"100%"}
          mb={20}
        >
          <Text fontWeight="bold" color="#FFC700" fontSize={"$5xl"}>
            00:18
          </Text>
          <Text color="white" mt={-5}>
            Finding Opponent
          </Text>
          <Text color="white" mt={1}>
            <Text color="#18D742">{userInRoom}</Text> /5
          </Text>
        </Box>
        <TouchableOpacity onPress={() => navigation.navigate("GamePage")}>
          {/* {UserGamee.map((item) => (
            <CradUser
              key={item.id}
              id={item.id}
              name={item.name}
              avatar={item.avatar}
            />
          ))} */}
        </TouchableOpacity>
      </LayoutBg>
    </View>
  );
};