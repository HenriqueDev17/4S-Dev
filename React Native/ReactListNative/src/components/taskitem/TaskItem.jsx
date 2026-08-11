import {Text, View, Image, TouchableOpacity} from "react-native"
import {TaskItemStyle} from "./TaskItemStyle"

export const TaskItem = ({dados : {id, descricao}}) => {
    return (
        <View style={TaskItemStyle.cardBox}>
      
            <Text style= {TaskItemStyle.cardText}> {descricao} - {id}</Text>
            <TouchableOpacity style={[TaskItemStyle.cardButton, TaskItemStyle.cardButtonEditColor]}>
            <Image style={TaskItemStyle.cardButtonImage} source={require('../../../assets/lapis.png')}/>
             </TouchableOpacity>
             <TouchableOpacity style={[TaskItemStyle.cardButton, TaskItemStyle.cardButtonThasColor]}>
             <Image style={TaskItemStyle.cardButtonImage}source={require('../../../assets/lixeira.png')}/>
            </TouchableOpacity>
        </View>
    )
}