import { useEffect } from "react";

export function useTitle(title: string){
    useEffect(()=>{
        document.title = document.title + " " + title;
    }, [])
}