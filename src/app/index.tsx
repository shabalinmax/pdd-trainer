import React from 'react'
import {createRoot} from 'react-dom/client'

import {RouterProvider} from "./Providers";
import {App} from "./app";
import {Provider as ReduxProvider} from "react-redux";
import {store} from "../entities/store";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "~shared/lib/firebase";

const reactRoot = createRoot(
    document.getElementById('root')!,
)
const app = initializeApp(firebaseConfig);
reactRoot.render(
        <ReduxProvider store={store}>
            <RouterProvider/>
            <App/>
        </ReduxProvider>
)
