

function Toprated (Cart){
    return(props)=>{
        return(
            <div>
                <label className="bg-red-500 text-amber-50 absolute p-1">Toprated</label>
                <Cart {...props}/>
            </div>
        );
    }
}
export default Toprated