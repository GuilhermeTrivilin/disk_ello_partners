import { Platform } from 'react-native'
import ImagePicker from 'react-native-image-picker';

const options = {
	title: 'Selecione a foto desejada',
	cancelButtonTitle: 'Cancelar',
	takePhotoButtonTitle: 'Tirar uma foto da câmera',
	chooseFromLibraryButtonTitle: 'Procurar na galeria',
	storageOptions: {
		skipBackup: true,
		path: 'images',
	},
	maxWidth: 800,
	maxHeight: 800
};

export const imagePicker = (setDisplayImage, setRequestImage) => {
	ImagePicker.showImagePicker(options, response => {
		if (response.didCancel) {
			console.log('User cancelled image picker');
		} else if (response.error) {
			console.log('ImagePicker Error: ', response.error);
		} else {
			const uri = Platform.OS === 'ios' ? response.uri : response.uri
			const name = `upload.${response.type.split('/').pop()}`

			setRequestImage ?
				setRequestImage({ uri, name, type: response.type })
				:
				false

			setDisplayImage({ uri: response.uri })
		}
	});
}