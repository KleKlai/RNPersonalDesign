import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  useColorScheme,
} from "react-native";
import React from "react";
import { Text, View } from "../../components/Themed";
import { normalize } from "../../lib/fontNormilize";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import Transactions from "../../constants/Transactions";
import { parseDate } from "../../lib/Date";
import Banner from "../../constants/Banner";
import Colors from "../../constants/Colors";

const { height } = Dimensions.get("window");

const TabOneScreen = () => {
  const theme = useColorScheme() ?? "light";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={stylesHeader.headerTitle}>Home</Text>
      </View>

      <View style={styles.carousel}>
        <ImageCarousel />
      </View>

      <View style={styles.transaction}>
        <View
          style={[
            stylesTransactions.header,
            {
              backgroundColor:
                theme === "light"
                  ? Colors.dark.background
                  : Colors.light.background,
            },
          ]}
        >
          <Text
            style={[
              stylesTransactions.headerText,
              {
                color: theme === "light" ? Colors.dark.text : Colors.light.text,
              },
            ]}
          >
            Recent Transactions
          </Text>
          <Link href="/" style={stylesTransactions.seeAllText}>
            See all
          </Link>
        </View>
        <View
          style={[
            stylesTransactions.transactionList,
            {
              backgroundColor:
                theme === "light"
                  ? Colors.dark.background
                  : Colors.light.background,
            },
          ]}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {Transactions.map((data, index) => {
              return (
                <TransactionItem
                  key={index}
                  service={data.service}
                  amount={"$" + data.amount}
                  date={parseDate(data.date)}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          position: "absolute",
          bottom: 20,
          right: 20,
          height: 70,
          backgroundColor: "#fff",
          borderRadius: 100,
        }}
        onPress={() => {
          router.push({
            pathname: "/modal",
            params: {
              title: "Payment successful!",
              amount: "400.00",
              description: "has been sent to Maynard from your wallet",
            },
          });
        }}
      >
        <Ionicons name="add" size={38} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default TabOneScreen;

const ImageCarousel = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={stylesCarousel.container}>
      <View style={stylesCarousel.content}>
        <Image source={Banner["firstImage"]} style={stylesCarousel.image} />
      </View>
    </View>
    <View style={stylesCarousel.container}>
      <View style={stylesCarousel.content}>
        <Image source={Banner["SecondImage"]} style={stylesCarousel.image} />
      </View>
    </View>
  </ScrollView>
);

const TransactionItem = ({ service, amount, date }: any) => {
  const theme = useColorScheme() ?? "light";

  return (
    <View
      style={[
        stylesTransactions.transactionItem,
        {
          backgroundColor:
            theme === "light"
              ? Colors.dark.background
              : Colors.light.background,
        },
      ]}
    >
      <View style={{
          backgroundColor:
            theme === "light"
              ? Colors.dark.background
              : Colors.light.background,
          alignItems: 'flex-start',
        }}>
        <Text
          style={[
            stylesTransactions.transactionText,
            {
              color: theme === "light" ? Colors.dark.text : Colors.light.text,
            },
          ]}
        >
          {service}
        </Text>
        <Text
          style={[
            stylesTransactions.transactionTextSub,
            {
              color: theme === "light" ? Colors.dark.text : Colors.light.text,
            },
          ]}
        >
          {service}
        </Text>
      </View>
      <View
        style={{
          backgroundColor:
            theme === "light"
              ? Colors.dark.background
              : Colors.light.background,
          alignItems: "flex-end",
        }}
      >
        <Text
          style={[
            stylesTransactions.amountText,
            {
              color: theme === "light" ? Colors.dark.text : Colors.light.text,
            },
          ]}
        >
          {amount}
        </Text>
        <Text
          style={[
            stylesTransactions.transactionDate,
            {
              color: theme === "light" ? Colors.dark.text : Colors.light.text,
            },
          ]}
        >
          {date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    width: Dimensions.get("window").width,
  },
  header: {
    width: Dimensions.get("window").width,
    flex: 0.1,
    height: height * 0.1,
  },
  carousel: {
    width: Dimensions.get("window").width,
    flex: 0.2,
    height: height * 0.1,
  },
  transaction: {
    flex: 0.7,
    width: Dimensions.get("window").width,
  },
});

const stylesHeader = StyleSheet.create({
  headerTitle: {
    paddingTop: 40,
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
});

const stylesCarousel = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    padding: 10,
    flex: 0.1,
    height: height * 0.2,
  },
  content: {
    height: Dimensions.get("window").height * 0.15,
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 15,
  },
});

const stylesTransactions = StyleSheet.create({
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  transactionText: {
    fontFamily: "SFProDisplayBold",
    fontSize: normalize(15),
  },
  transactionTextSub: {
    fontFamily: "SFProDisplayRegular",
    fontSize: normalize(12),
  },
  transactionDate: {
    fontFamily: "SFProDisplayRegular",
    fontSize: normalize(13),
  },
  amountText: {
    fontFamily: "SFProDisplayMedium",
    fontSize: normalize(15),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -20,
    paddingTop: 15,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  headerText: {
    fontSize: normalize(19),
    paddingLeft: 25,
    fontFamily: "SFProDisplayBold",
  },
  seeAllText: {
    color: "#3D5AFE",
    paddingRight: 25,
    fontWeight: "700",
    fontFamily: "SFProDisplayRegular",
  },
  transactionList: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
