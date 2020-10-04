import 'react-native-gesture-handler';
import React from 'react'
import Routes from './routes'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RegisterProvider } from '~/states/RegisterManage'
import { GlobalState } from '~/states/ContextProvider'
import { RootSiblingParent } from 'react-native-root-siblings'

export default function App() {
	return (
		<SafeAreaProvider>
			<RootSiblingParent>
				<GlobalState>
					<RegisterProvider>
						<Routes />
					</RegisterProvider>
				</GlobalState>
			</RootSiblingParent>
		</SafeAreaProvider>
	)
} 