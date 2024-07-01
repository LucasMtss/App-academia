import { ItemExerciceListProps } from '@/utils/data/exercises';
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function loadExerciseList(){
    let exerciseList = ''
    try {
        exerciseList = await AsyncStorage.getItem('my-gyn-app:exerciseList') || 'none';
      } catch (error: any) {
        console.log(error.message);
      }  return exerciseList.length && exerciseList !== 'none' ? JSON.parse(exerciseList) : null;
}

export async function saveExerciseList(exerciseList: ItemExerciceListProps[]){
    try {
        await AsyncStorage.setItem('my-gyn-app:exerciseList', JSON.stringify(exerciseList)  )
    } catch (error: any) {
        console.log(error.message);
    }
}