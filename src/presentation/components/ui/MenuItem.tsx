import { Pressable, StyleSheet, Text, View } from "react-native"

interface Props {
    name: string,
    icon: string,
    component: string,
    // Todo:
}

export const MenuItem = ({ name, icon, component }: Props) => {

    return(
        <Pressable 
        onPress={ () => console.log('Click/tap') }
        >
            <View style={{

            }}>

            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,

    }
})

