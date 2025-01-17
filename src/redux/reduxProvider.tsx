'use client'
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import exp from "constants";

export default function ReduxProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}