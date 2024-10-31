
// show StateForm.jsx
// ***jodi akadhik hook thkae tahoke amra avabe hanle korte pari

import { useState } from "react";
// **akadhik useState hook control korar jonno akti hook declared
const useInputState=(defaultValue='')=>{

    const [value,setValue]=useState(defaultValue)


// ***akadhik handle thakle amra akti handle er maddhome handle korte pari

const handleChange=(e)=>{
    setValue(e.target.value)
}
// return[
//     value,handleChange
// ]

// *** if according to object return
return{value,handleChange}

}
export default useInputState

