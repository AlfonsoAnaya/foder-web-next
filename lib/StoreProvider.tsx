'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
// import { initializeDay } from './features/selectedDay'


export default function StoreProvider({
    // selectedDay,
    children
}: {
    // selectedDay: number,
    // isSidenavOpen: boolean,
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        console.log(storeRef)
        storeRef.current = makeStore();
        // storeRef.current.dispatch(initializeDay(selectedDay));
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}