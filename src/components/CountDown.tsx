// // WITH A LIBRARY
// // "use client"
// // import React from 'react'
// // import Countdown from 'react-countdown'

// // const endingDate = new Date("2023-07-25")

// // const CountDown = () => {
// //   return (
// //     <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
// //   )
// // }

// // export default CountDown


// // WITHOUT A LIBRARY
// "use client"
// import React, { useState, useEffect } from "react";

// const CountDown = () => {
  
//   let difference = +new Date(`10/10/2023`) - +new Date();
//   const [delay, setDelay] = useState(difference);

//   const d = Math.floor(difference / (1000 * 60 * 60 * 24));
//   const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
//   const m = Math.floor((difference / 1000 / 60) % 60);
//   const s = Math.floor((difference / 1000) % 60);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDelay(delay - 1);
//     }, 1000);

//     if (delay === 0) {
//       clearInterval(timer);
//     }

//     return () => {
//       clearInterval(timer);
//     };
//   });
//   return (
//     <span className="font-bold text-5xl text-yellow-300">
//       {d}:{h}:{m}:{s}
//     </span>
//   );
// };

// export default CountDown;

"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date("2025-09-10T00:00:00").getTime(); // apni date set karo 2025-10-10T00:00:00
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Sirf client side render ke liye
    setIsClient(true);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) return null; // Server-side render pe kuch na dikhaye

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
    </span>
  );
};

export default CountDown;
