import { Header } from '@/components/header';
import { View, SectionList, Text, FlatList } from 'react-native';
import { ExerciseProps} from '@/utils/data/exercises'
import {  useEffect, useRef, useState } from 'react';
import { Link } from 'expo-router';
import { Exercise } from '@/components/exercise';
import { CategoryButton } from '@/components/category-button';
import { loadExerciseList } from '@/stores/exercise-list-store';

export default function Home() {
    const [days, setDays] = useState([]);
    const [exerciseList, setExerciseList] = useState([]);
    const [categorySelected, setCategorySelected] = useState('');
    const sectionListRef = useRef<SectionList<ExerciseProps>>(null);


    async function getExercisesList(){
        const dataInStorage = await loadExerciseList()
        if(!dataInStorage){
            return;
        }
        setExerciseList(dataInStorage);
        setDays(dataInStorage.map((item: any) => item.title))
    }

    useEffect(() => {
        getExercisesList();
    }, [])

    function handleCategorySelected(item: string){
        setCategorySelected(item);

        const sectionIndex = days.findIndex(day => day === item);

        if(sectionListRef.current){
            sectionListRef.current.scrollToLocation({
                animated: true,
                sectionIndex,
                itemIndex: 0
            })
        }
    }

    return (
        <View className="">
            <Header/>
            {
                days.length && exerciseList.length ? (
                    <>
                      <FlatList 
                            data={days}
                            keyExtractor={(item) => item}
                            renderItem={({item}) => (<CategoryButton title={item} isSelcted={item === categorySelected} onPress={() => handleCategorySelected(item)}/>)}
                            horizontal
                            className='max-h-14 h-14 mt-5'
                            contentContainerStyle={{ gap: 12, paddingHorizontal: 20}}
                        />
                        <SectionList 
                            sections={exerciseList}
                            keyExtractor={(item) => item.id}
                            stickySectionHeadersEnabled={false}
                            renderItem={({item}) => (
                                <Link href={`/exercise/${item.id}`} asChild>
                                <Exercise data={item}/>
                                </Link>
                            )}
                            renderSectionHeader={({section: {title}}) => <Text className='text-xl text-white mt-8 mb-3'>{title}</Text>}
                            className='p-5'
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{paddingBottom: 200}}
                            ref={sectionListRef}
                        />
                    </>
                ) :
                <>
                <Text className='text-slate-100 text-2xl text-center mt-16 mb-16'>Você ainda não possui exercícios cadastrados</Text>
                <Link href={'/add-exercise-list'} className='mx-3 text-slate-100 p-4 text-center bg-orange-500 text-lg font-bold rounded-md mt-4'>
                    Adicionar exercícios
                </Link>
                </>
            }
          
        </View>
    );
}
