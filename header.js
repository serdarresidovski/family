import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function () {
return (
<View className="flex-1 items-center justify-center bg-[#ffe0d5]">
<Text className="text-[#fd8b8b] absolute top-12 text-black-300 font-semibold text-4xl">Family<Text className="text-[#32bea6] text-black-300 font-semibold text-4xl">GO</Text></Text>
<StatusBar />
</View>
)



}