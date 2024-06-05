import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="min-h-[80vh] w-full justify-center px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="mt-10 text-3xl font-semibold text-white">
            Sign up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) =>
              setForm((prev) => ({ ...form, username: e.target.value }))
            }
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) =>
              setForm((prev) => ({ ...form, email: e.target.value }))
            }
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) =>
              setForm((prev) => ({ ...form, password: e.target.value }))
            }
            otherStyles="mt-7"
          />
          <CustomButton
            title={"Sign Up"}
            handlePress={() => {}}
            containerStyles={"mt-7"}
            isLoading={isLoading}
          />
          <View className="flex-row justify-center items-center mt-4">
            <Text className="text-gray-100 text-lg font-pnormal">
              Already have an account?
            </Text>
            <Link
              href={"/sign-in"}
              className="text-secondary font-psemibold ml-1"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
