import axios from "../utils/axios";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [first, setFirst] = useState("This is jsut a normal data");
  const [isFirstChanged, setIsFirstChanged] = useState(false);

  const [second, setSecond] = useState("This is very importatnt data");
  const [isSecondChanged, setIsSecondChanged] = useState(false);

  const forNormalDataHandling = () => {
    setFirst("This is the new normal data");
    setIsFirstChanged(true);
  };
  const forImpDataHandling = () => {
    setSecond("This is the new very important data");
    setIsSecondChanged(true);
  };

  const getusers = () => {
    const api = "/users";
    axios
      .get(api)
      .then((users) => {
        console.log(users);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getusers();
    console.log("Services Component Mounted! ^^");

    return () => {
      console.log("Services Component Unmounted! ^^");
    };
  }, [second]);
  return (
    <div>
      <h1 className={isFirstChanged ? "text-red-600" : ""}>{first}</h1>
      <button
        onClick={forNormalDataHandling}
        className="px-3 py-1 bg-blue-600 text-white rounded-md"
      >
        Change normal data
      </button>{" "}
      <br />
      <h1 className={isSecondChanged ? "text-red-600" : ""}>{second}</h1>
      <button
        onClick={forImpDataHandling}
        className="px-3 py-1 bg-blue-600 text-white rounded-md"
      >
        Change Large data
      </button>
    </div>
  );
};

export default Services;

// import React, { useEffect } from 'react'

// const Services = () => {
//   const [FirstChanged, setFirstChanged] = React.useState(false);
//   const [SecondChanged, setSecondChanged] = React.useState(false);

//   const forNormalDataHandling = ()=> {
//     setFirstChanged((prev) => !prev);
//   }
//   const forImpDataHandling = ()=> {
//     setSecondChanged((prev) =>!prev);
//   }

//   useEffect(()=> {
//     console.log('Services is Mounted! ^^');

//     return () => {
//       console.log('services is Unmounted! ^^');
//     }
//   },[SecondChanged]);
//   return (
//     <div>
//       <h1 className={FirstChanged ? 'text-red-600' : ''}>{FirstChanged ? 'This is new normal data' : 'This is just a normal data'}</h1>
//       <button onClick={forNormalDataHandling} className='bg-red-500 px-3 py-1 rounded-md'>Change normal data</button>

//       <h1 className={SecondChanged ? 'text-red-600' : ''}>{SecondChanged ? 'This is new normal data' : 'This is just a normal data'}</h1>
//       <button onClick={forImpDataHandling} className='bg-red-500 px-3 py-1 rounded-md'>Change Imp data</button>
//     </div>
//   )
// }

// export default Services
