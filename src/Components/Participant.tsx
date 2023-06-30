import {View, Text, TouchableOpacity} from 'react-native'

type Props = {
    name: string
    onRemove: () => void
}

export function Participant({name, onRemove}: Props) {
    return(
        <View className='flex-row mb-2'>
            <View className='bg-gray-500 h-14 rounded-lg justify-center flex-1 w-full mr-2'>
                <Text className='text-white px-3'>{name}</Text>
            </View>
            <TouchableOpacity 
                onPress={onRemove}
                activeOpacity={0.7} 
                className='h-14 w-14 bg-red-500 rounded-lg items-center justify-center'>
                <Text className='text-white font-bold'>-</Text>
            </TouchableOpacity>
        </View>
    )
}