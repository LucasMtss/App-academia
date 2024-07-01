import { Image, Text, View } from "react-native";
import { Link } from "expo-router";

export function Header(){

    function handleRedirect() {

    }
    return (
        <View className="flex-row items-center border-b border-slate-700 bg-orange-500 px-4 py-7">
            <View className="flex-1 flex-row items-center pt-3">
                <Image className="" source={require('@/assets/app-logo.png')} />
                <Text className="text-slate-800 font-bold text-xl">My Gym App</Text>
            </View>
           <Link className="border rounded-md border-slate-800 p-1 px-2 mt-4" href={'/add-exercise-list'}>
                Adicionar exercícios
           </Link>
        </View>
    )
}