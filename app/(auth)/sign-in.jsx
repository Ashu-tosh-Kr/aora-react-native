import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
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
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm((prev) => ({ ...form, email: e }))}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) =>
              setForm((prev) => ({ ...form, password: e }))
            }
            otherStyles="mt-7"
          />
          <CustomButton
            title={"Sign In"}
            handlePress={() => {
              if (!form.email || !form.password)
                Alert.alert("Please fill all the fields");

              setIsLoading(true);
              try {
                const result = signIn(form.email, form.password);
                router.replace("/home");
              } catch (e) {
                console.log(e);
                Alert.alert("An error occured while creating the account");
              } finally {
                setIsLoading(false);
              }
            }}
            containerStyles={"mt-7"}
            isLoading={isLoading}
          />
          <View className="flex-row justify-center items-center mt-4">
            <Text className="text-gray-100 text-lg font-pnormal">
              Don't have an account?
            </Text>
            <Link
              href={"/sign-up"}
              className="text-secondary font-psemibold ml-1"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
