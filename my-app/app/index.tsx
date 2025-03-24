import { Text, View } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/root/tabs/signIn">Sign In</Link>
      <Link href="/root/tabs/explore">Explore</Link>
      <Link href="/root/tabs/profile">Profile</Link>
      <Link href="/root/properties/1">Property</Link>
      
    </View>
  );
}
