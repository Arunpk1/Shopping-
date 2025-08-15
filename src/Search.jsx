import { useState } from "react"

function Search(){
    const[searchvalue,setsearchvalue]=useState("")
    return(
        <div className="search-bar">
        <input type="text" className="search" value={searchvalue} onChange={(e)=>{
            setsearchvalue(e.target.value)
        }}/>
        <button className="search-btn" onClick={()=>{
            console.log(searchvalue)
        }}>search</button>
        </div>
    )

}
export default Search