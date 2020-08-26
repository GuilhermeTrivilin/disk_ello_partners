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

export const imagePicker = (setSource, setPhoto) => {
	ImagePicker.showImagePicker(options, (response) => {

		if (response.didCancel) {
			console.log('User cancelled image picker');
		} else if (response.error) {
			console.log('ImagePicker Error: ', response.error);
		} else if (response.customButton) {
			console.log('User tapped custom button: ', response.customButton);
		} else {
			setSource({uri: response.uri})

			const uploadImage = Platform.OS === 'ios' ?
				response.uri
				:
				response.path

			setPhoto ? setPhoto({uri: uploadImage, name: 'image.jpg', type: 'image/jpeg'}) : false
		}
	});
}