import { FaStar } from "react-icons/fa";
import "./star.css"
import {useState,useRef, useEffect} from "react"

function Stars(){
    const [children,setChildren] = useState([])
    const [click,setClick] = useState(false)

    const container = useRef() ;

    useEffect(() => {
        setChildren(Array.from(container.current.children)) ;
    },[]);

    const handleMouseOver = (key) => {
        children.slice(0,++key).map((ele) => {
            ele.classList.add("gold");
        })
        children.slice(key).map((ele) => {
            ele.classList.remove("gold")
        })
    }
    const handleMouseLeave = () => {
        if(!click){
            children.map((ele) => {
                ele.classList.remove("gold");
            })
        }
        setClick(false);
    }
    const handleClick =(key) => {
        children.slice(0,++key).map((ele) => {
            ele.classList.add("gold") ;
        })
        setClick(true)
    }
    const ten = [0,1,2,3,4,5,6,7,8,9] ;

    return(
       <div ref={container} onMouseLeave={handleMouseLeave} className="stars">
            {
                ten.map((ele) => {
                    return <FaStar key={ele} onClick={() => handleClick(ele)}  onMouseOver={() => handleMouseOver(ele)} className="star" />
                })
            }   
        </div>
    )
}

export default Stars ;