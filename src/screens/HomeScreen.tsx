import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { Participant } from '../Components/Participant';
import { useState } from 'react';

export function Home(){

    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd() {
        if(participants.includes(participantName)){
            return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')
        }
        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: string){
        Alert.alert('Remover', `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado")
            },
            {
                text: 'Não',
                style: 'cancel'
            } 
        
        ])
    }

    return (
        <View className="flex-1 p-6 mt-8">
            <View>
                <Text className='text-white text-lg'>Nome do evento</Text>
                <Text className='text-gray-300 text-base'>Sexta, 4 de Novembro de 2022</Text>
            </View>
            <View className='flex-row mt-5 mb-6'>
                <TextInput
                    placeholder='Nome do participante'
                    placeholderTextColor='#6B6B6B'
                    className='bg-gray-600 p-3 rounded-lg flex-1 mr-2 w-full text-white'
                    onChangeText={setParticipantName}
                    value={participantName}
                />
                <TouchableOpacity className='bg-green-500 h-14 w-14 rounded-lg items-center justify-center' onPress={()=> handleParticipantAdd()}>
                    <Text className='text-white font-bold text-lg'>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant 
                        key={item}
                        name={item}
                        onRemove={()=> handleParticipantRemove(item)}   
                    />
                )}
                ListEmptyComponent={<Text>oi</Text>}
                showsVerticalScrollIndicator = {false}
            />
        </View>
    )
}