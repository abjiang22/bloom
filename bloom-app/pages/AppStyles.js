import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
    },
    
    plantContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center', 
        paddingTop: 70,
        paddingBottom: 0,
        width: '100%',
    },

    galleryContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 0,
        marginTop: -300,
    },
    gallery: {
        height: '70%',
        width: '100%',
    },
});