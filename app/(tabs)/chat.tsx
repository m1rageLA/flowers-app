import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { variables } from "../../assets/variables";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

// Данные для списка чатов
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Tymur",
    title: "Hello! what's up?",
    avatarUrl:
      "https://n1s1.hsmedia.ru/42/55/6f/42556fd2eeeb22e60deb1de12c6dbd29/728x546_1_b51fd54fe93a846d9693c4a89c9007fa@1920x1440_0xac120004_3112206001676898819.jpeg",
    sendTime: "06:42", // Убедитесь, что время указано в формате чч:мм
  },
  {
    id: "1bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Alex",
    title: "Hello! what's up?",
    avatarUrl:
      "https://n1s1.hsmedia.ru/42/55/6f/42556fd2eeeb22e60deb1de12c6dbd29/728x546_1_b51fd54fe93a846d9693c4a89c9007fa@1920x1440_0xac120004_3112206001676898819.jpeg",
    sendTime: "06:42", // Убедитесь, что время указано в формате чч:мм
  },
  {
    id: "2bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Sam",
    title: "Hello! what's up?",
    avatarUrl:
      "https://n1s1.hsmedia.ru/42/55/6f/42556fd2eeeb22e60deb1de12c6dbd29/728x546_1_b51fd54fe93a846d9693c4a89c9007fa@1920x1440_0xac120004_3112206001676898819.jpeg",
    sendTime: "06:42", // Убедитесь, что время указано в формате чч:мм
  },
  {
    id: "3bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Nikita",
    title: "Hello! what's up?",
    avatarUrl:
      "https://n1s1.hsmedia.ru/42/55/6f/42556fd2eeeb22e60deb1de12c6dbd29/728x546_1_b51fd54fe93a846d9693c4a89c9007fa@1920x1440_0xac120004_3112206001676898819.jpeg",
    sendTime: "06:42", // Убедитесь, что время указано в формате чч:мм
  },
  {
    id: "3bd7ac3bea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Vasilii",
    title: "Hello! what's up?",
    avatarUrl:
      "https://n1s1.hsmedia.ru/42/55/6f/42556fd2eeeb22e60deb1de12c6dbd29/728x546_1_b51fd54fe93a846d9693c4a89c9007fa@1920x1440_0xac120004_3112206001676898819.jpeg",
    sendTime: "06:42", // Убедитесь, что время указано в формате чч:мм
  },
  {
    id: "3b3d7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Oleg T.",
    title: "Hello! what's up?",
    avatarUrl:
      "https://n1s1.hsmedia.ru/42/55/6f/42556fd2eeeb22e60deb1de12c6dbd29/728x546_1_b51fd54fe93a846d9693c4a89c9007fa@1920x1440_0xac120004_3112206001676898819.jpeg",
    sendTime: "06:42", // Убедитесь, что время указано в формате чч:мм
  },
  {
    id: "3bd72acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Samti",
    title: "Hello! what's up?",
    avatarUrl:
      "https://n1s1.hsmedia.ru/42/55/6f/42556fd2eeeb22e60deb1de12c6dbd29/728x546_1_b51fd54fe93a846d9693c4a89c9007fa@1920x1440_0xac120004_3112206001676898819.jpeg",
    sendTime: "06:42", // Убедитесь, что время указано в формате чч:мм
  },
  {
    id: "3bd7acb123ea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "NoName",
    title: "Hello! what's up?",
    avatarUrl:
      "https://n1s1.hsmedia.ru/42/55/6f/42556fd2eeeb22e60deb1de12c6dbd29/728x546_1_b51fd54fe93a846d9693c4a89c9007fa@1920x1440_0xac120004_3112206001676898819.jpeg",
    sendTime: "06:42", // Убедитесь, что время указано в формате чч:мм
  },
  {
    id: "3bd7acb123ea-c1b1-46c2-aed5-3ad31253abb28ba",
    name: "NoName",
    title: "Hello! what's up?",
    avatarUrl:
      "https://n1s1.hsmedia.ru/42/55/6f/42556fd2eeeb22e60deb1de12c6dbd29/728x546_1_b51fd54fe93a846d9693c4a89c9007fa@1920x1440_0xac120004_3112206001676898819.jpeg",
    sendTime: "06:42", // Убедитесь, что время указано в формате чч:мм
  },
  {
    id: "3bd7acb123ea-c3211b1-46c2-aed5-3ad53abb28ba",
    name: "NoName",
    title: "Hello! what's up?",
    avatarUrl:
      "https://n1s1.hsmedia.ru/42/55/6f/42556fd2eeeb22e60deb1de12c6dbd29/728x546_1_b51fd54fe93a846d9693c4a89c9007fa@1920x1440_0xac120004_3112206001676898819.jpeg",
    sendTime: "06:42", // Убедитесь, что время указано в формате чч:мм
  },
];

// Проверка корректности времени
const isValidTime = (time: string): time is `${number}:${number}` => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
};

type Time = string & { __brand: "time" }; // Брэндированный тип для времени

const toTime = (time: string): Time => {
  if (isValidTime(time)) {
    return time as Time;
  }
  throw new Error(`Invalid time format: ${time}`);
};

type ItemProps = {
  title: string;
  name: string;
  avatarUrl: string;
  sendTime: Time;
};

const Item = ({ title, name, avatarUrl, sendTime }: ItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity
      style={isHovered ? [styles.item, styles.itemHovered] : styles.item}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      <View style={styles.item__box}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.avatar} source={{ uri: avatarUrl }} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View style={styles.item__rightSide}>
          <View style={styles.indicator}></View>
          <Text>{sendTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header__text}>Flowi</Text>
        <FontAwesome name="search" size={24} color="white" />
      </View>
      <View style={styles.chatBox}>
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={DATA.map((item) => ({
              ...item,
              sendTime: toTime(item.sendTime),
            }))}
            renderItem={({ item }) => (
              <Item
                title={item.title}
                name={item.name}
                avatarUrl={item.avatarUrl}
                sendTime={item.sendTime}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    padding: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: variables.HEADER,
  },
  header__text: {
    fontSize: 26,
    color: variables.TEXT.LOGO,
  },
  container: {
    flex: 1,
    backgroundColor: variables.HEADER,
  },
  chatBox: {
    flex: 1,
    padding: 15,
    paddingTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
  },
  item: {
    marginVertical: 8,
    borderRadius: 15,
    padding: 10,
  },
  item__box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item__rightSide: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemHovered: {
    backgroundColor: "lightgray",
  },
  name: {
    fontSize: 22,
  },
  title: {
    fontSize: 18,
  },
  indicator: {
    marginTop: 10,
    width: 10,
    height: 10,
    backgroundColor: variables.HEADER,
    borderRadius: 50,
  },
});
