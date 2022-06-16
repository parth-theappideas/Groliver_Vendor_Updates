import { StyleSheet } from 'react-native'
import { vs,hs,fs } from '../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff'
    },
    container2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container3: {
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: vs(320),
        width: '92%',
    },
    successImg: {
        width: hs(100),
        height: vs(100),
        resizeMode: 'contain',
        marginTop: vs(30)
    },
    container4: {
        marginTop: vs(25),
        alignItems: 'center'
    },
    label: {
        fontSize: fs(18),
        color: '#000',
        fontWeight: 'bold'
    },
    label2: {
        fontSize: fs(16),
        marginTop: vs(10)
    },
    dashboard_btn:{
        backgroundColor: '#009345',
        borderRadius: 5,
        justifyContent: 'center',
        width: '92%',
        borderColor: '#fff',
        alignSelf: 'center',
        marginTop: vs(20),
    }
})

export default styles;