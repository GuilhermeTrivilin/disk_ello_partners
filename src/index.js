import 'react-native-gesture-handler';
import React from 'react'
import Routes from './routes'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RegisterProvider } from '~/states/RegisterManage'
import { GlobalState } from '~/states/ContextProvider'

export default function App() {
	return (
		<SafeAreaProvider>
			<GlobalState>
				<RegisterProvider>
					<Routes />
				</RegisterProvider>
			</GlobalState>
		</SafeAreaProvider>
	)
} 