import { Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";

const OAuth = () => (
  <View>
    <View className="flex flex-row items-center justify-center gap-x-3">
      <View className="flex-1 bg-general-100 h-1"></View>

      <Text className="text-lg font-JakartaLight">Or</Text>

      <View className="flex-1 bg-general-100 h-1"></View>
    </View>

    <CustomButton title="Sign in with Goolge" className="mt-6" />
  </View>
);

export default OAuth;
