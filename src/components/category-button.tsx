import { Pressable, PressableProps, Text } from "react-native";
import { clsx } from 'clsx'

interface ICategoryProps extends PressableProps{
    title: string;
    isSelcted?: boolean;
}

export function CategoryButton({title, isSelcted, ...rest}: ICategoryProps){
    return (
        <Pressable className={clsx('bg-slate-800 px-4 justify-center rounded-md h-10', isSelcted && 'border-2 border-orange-500' )} {...rest}>
            <Text className="text-slate-100 text-sm">{title}</Text>
        </Pressable>
    )
}