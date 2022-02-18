import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// ====

//  ====
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// ======
import './helper/grid.scss'
import './helper/reset.scss'
import './helper/global.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
)
