import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation, Redirect } from 'expo-router'
import { EXERCISES } from "@/utils/data/exercises";
import { Button } from "@/components/button";
import { Feather } from '@expo/vector-icons'
import YoutubeIframe from 'react-native-youtube-iframe'


export default function ExerciseDetails(){
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();
    const exercise = EXERCISES.find(item => item.id === id);

    if(!exercise){
        return <Redirect href='/'/>
    }

    function goBack(){
        navigation.goBack();
    }

    return (
        <View className="flex-1">
            <Image source={exercise?.cover} className="w-full h-52" resizeMode="cover"/>
            <View className="p-5 mt-2 flex-1">
                <Text className="text-white text-3xl">{exercise.title}</Text>
                <Text className="text-white text-1 my-2">{exercise?.series}</Text>
                <Text className="text-white text-1 my-2">{exercise?.repetitions}</Text>
                <Text className="text-white text-1 my-2">{exercise?.restTime}</Text>
               
            </View>
            <View className="px-5">
                <YoutubeIframe 
                    videoId={exercise.videoUrl}
                    height={180}
                    forceAndroidAutoplay={true}
                />
            </View>

            <View className="mt-4 shadow-2xl p-2 border mx-5 border-slate-300 rounded-md shadow-slate-500">
                <Text className="text-white text-1 my-2">{exercise.comments}</Text>
            </View>

            <View className="p-5 pb-8 gap-5">
                <Button onPress={goBack}>
                    <Button.Icon>
                        <Feather name="plus-circle" size={20} />
                        <Button.Text>
                            Voltar
                        </Button.Text>
                    </Button.Icon>
                </Button>
            </View>
        </View>
    )
}