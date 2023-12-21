import { useEffect } from "react";

/**
 * @description hook para colocar titulo a las pages
 * @param {string} title 
 */

export const useSetHeadInfo=(title)=>{
    useEffect(()=>{
        document.title= title
    },[])
}