import { StyleSheet } from 'react-native';
const CAMERA_ICON_SIZE = 30;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32
    },
    uploadedImage:{
        width: 55,
        height: 53,
        borderRadius: 32
    },
    overlay: {
        
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    uploadedCameraIconContainer: {
        position: 'absolute',
        bottom: 3,
        right: -5,
    },
    cameraIconContainer: {
        position: 'absolute',
        bottom: -8,
        right: -5,
    },
    cameraIcon: {
        backgroundColor: '#EBECEF',
        borderRadius: CAMERA_ICON_SIZE / 2,
        padding: 5,
        margin: 5,
    },
    imageIcon: {

    },
    displayNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    displayNameText: {
        flex: 1,
        fontWeight: '600',
        fontSize: 17,
    },
    characterCountContainer: {
        marginRight: 10,
    },
    characterCountText: {
        fontSize: 14,
        color: 'gray'
    },
    input: {
        width: '100%',
        height: 50,
        padding: 10,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: '#EBECEF',
        fontSize: 16,
    },
});