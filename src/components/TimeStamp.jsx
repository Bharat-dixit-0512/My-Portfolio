import React, { useEffect, useState } from "react";

const TimeStamp = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(now);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-4 text-xl mx-2 mt-15 right-6 z-100 drop-shadow-[0_0_8px_rgba(255,0,60,0.8)] text-red-400 font-mono">
      {time}
    </div>
  );
};

export default TimeStamp;