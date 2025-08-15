import { useState } from "react";
function useonlinestatus(){
const [onlinestatus,setonlinestatus]=useState(true);
window.addEventListener("online",()=>{
    setonlinestatus(true)})
    window.addEventListener("offline",()=>{
        setonlinestatus(false)})
        return onlinestatus;

}
export default useonlinestatus