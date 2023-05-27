import { useState, useEffect } from "react";

interface CountDownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

function CountDown({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = (): CountDownTime => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: CountDownTime = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<CountDownTime>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="h-screen flex justify-center items-center px-2 bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="py-4 px-6">
          <h2 className="text-4xl font-bold text-gray-800">Coming Soon</h2>
          <p className="mt-2 text-lg text-gray-600">
            We are working hard to bring you an amazing website. Stay tuned!
          </p>
        </div>

        <div className="py-4 px-6">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="border rounded-lg px-4 py-2">
              <div
                id="days"
                className="font-bold font-mono text-2xl text-gray-800"
              >
                {days}d
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div
                id="hours"
                className="font-bold font-mono text-2xl text-gray-800"
              >
                {hours}h
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div
                id="minutes"
                className="font-bold font-mono text-2xl text-gray-800"
              >
                {minutes}m
              </div>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <div
                id="seconds"
                className="font-bold font-mono text-2xl text-gray-800"
              >
                {seconds}s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CountDown;
