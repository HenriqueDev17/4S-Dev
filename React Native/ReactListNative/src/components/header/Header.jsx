import { Styles } from "./Styles";
import { View, Text } from "react-native";


export const Header = () => {
    return (
        <View style={Styles.header}>
            <Text style={Styles.headerTitle}>React List</Text>
        </View>
    )
}