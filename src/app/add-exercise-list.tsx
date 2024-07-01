import { Header } from '@/components/header';
import { View, Text, TextInput } from 'react-native';
import { Button } from '@/components/button';
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react';
import { Link } from 'expo-router';
import { decodeJson } from '@/utils/encode';
import { saveExerciseList } from '@/stores/exercise-list-store';

export default function AddExerciseList() {
    const [exerciseListCode, setExerciseListCode] = useState('')
    async function save(){
        try {
            const decodedExerciseList = decodeJson(exerciseListCode)
            if(decodedExerciseList) await saveExerciseList(decodedExerciseList)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View className="">
            <Header/>
            <View className='h-full flex pt-4'>
                <View className='mx-3 mb-4'>
                    <Text className='text-slate-100 text-lg mb-2'>Informe o código da lista</Text>
                    <TextInput className='bg-slate-200 h-10 pl-2' value={exerciseListCode} onChangeText={setExerciseListCode}/>
                </View>
                <Button onPress={save} className='mx-3'>
                    <Button.Icon>
                        <Entypo name="check" size={20} />
                        <Button.Text>
                            Salvar lista
                        </Button.Text>
                    </Button.Icon>
                </Button>
                <Link href={'/'} className='mx-3 border border-orange-500 p-4 text-center text-orange-500 text-lg font-bold rounded-md mt-4'>
                    Voltar
                </Link>
            </View>
        </View>
    );
}
