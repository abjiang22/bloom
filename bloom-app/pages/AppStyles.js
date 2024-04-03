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
    galleryContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    gallery: {
        height: '70%',
        width: '100%',
    }
});