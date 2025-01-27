import { forwardRef } from "react";
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

interface IExerciceDataProps {
    title: string;
    series: string;
    repetitions: string;
    restTime: string;
    comments: string;
    videoUrl: string;
    thumbnail: ImageProps;
}

interface IExerciseProps extends TouchableOpacityProps {
    data: IExerciceDataProps;
}

export const Exercise = forwardRef<TouchableOpacity, IExerciseProps>(({data, ...rest}, ref) => {
    return(
        <TouchableOpacity ref={ref} className="w-full flex-row items-center pb-4" {...rest}>
            <Image source={data.thumbnail} className="w-20 h-20 rounded-md"/>
            <View className="flex-1 ml-3">
                <View className="flex-row items-center justify-between">
                    <Text className="text-slate-100 flex-1">{data.title}</Text>
                </View>
                <View>
                    <Text className="text-slate-400 text-xs leading-5 mt-0.5">{data.series}</Text>
                    <Text className="text-slate-400 text-xs leading-5">{data.repetitions}</Text>
                    <Text className="text-slate-400 text-xs leading-5">{data.restTime}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
})