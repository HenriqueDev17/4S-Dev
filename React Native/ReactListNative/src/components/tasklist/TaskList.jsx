import {Text, View} from "react-native"
import {TaskStyle} from "./TaskStyle"

export const TaskList = () => {
    return (
        <View style={TaskStyle.cardBox}>
            <Text>Tast List Component</Text>
        </View>
    )
}