import { configureStore } from "@reduxjs/toolkit"
import translationsReducer from "translation/translationSlice"

const rootReducer = {
    Intl : translationsReducer
}
const store = configureStore({
    reducer: rootReducer
})
export default store;