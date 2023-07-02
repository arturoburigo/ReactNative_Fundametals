import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
  Platform,
  SafeAreaView,
} from "react-native";
import { Participant } from "../Components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Item existente",
        "Já existe um item na lista com esse nome"
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover",
      `Tem certeza que deseja remover ${name} da lista de compras ?`,
      [
        {
          text: "Sim",
          onPress: () =>
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name)
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View className="flex-1 p-6 mt-16">
      <View>
        <Text className="text-white text-lg">Lista de compras</Text>
        <Text className="text-gray-300 text-base">
          Domingo, 2 de Julho de 2023
        </Text>
      </View>
      <View className="flex-row mt-5 mb-6">
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          className="bg-gray-600 p-3 rounded-lg flex-1 mr-2 w-full text-white"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity
          className="bg-green-500 h-14 w-14 rounded-lg items-center justify-center"
          onPress={() => handleParticipantAdd()}
        >
          <Text className="text-white font-bold text-lg">+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={
          <View className="items-center mt-6">
            <Text className="text-white text-center w-3/4 text-lg">
              A lista está vazia no momento, favor adicione items!
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
