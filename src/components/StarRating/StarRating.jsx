import { useState } from "react"
import Star from "../Star/Star"

const containerStyle = {
        display:'flex',
        alignItems:'center',
        gap:'16px'
    }

const starContainerStyle = {
    display:'flex',
}

const textStyle = {
    lineHeight:'1',
    margin:'0'
}

const StarRating = ({maxRating = 5}) => {
    const [stars,setStars] = useState(0)

  return (
    <div style={containerStyle}>
        <div style={starContainerStyle}>{Array.from({length:maxRating},(_,i)=> <Star key={i} onClick={()=>setStars(i+1)} full={stars>=i+1}/>)}</div>
        <p style={textStyle}>{stars || ""}</p>
    </div>
  )
}

export default StarRating