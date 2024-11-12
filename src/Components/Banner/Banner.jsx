import ProgressBar from "@ramonak/react-progress-bar";
import { useState, useEffect } from "react";
import img1 from '../../assets/sat2.jpg';
import img2 from '../../assets/nav-icon.png';
import banner2 from '../../assets/second_banner.png';
import './Banner.css';

const Banner = () => {
  // Initial countdown values
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) return prevSeconds - 1;

        if (minutes > 0) {
          setMinutes(minutes - 1);
          return 59;
        }

        if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          return 59;
        }

        // If countdown is over, clear the interval
        clearInterval(countdownInterval);
        return 0;
      });
    }, 1000);

    return () => clearInterval(countdownInterval); // Clear interval on unmount
  }, [hours, minutes]);

  return (
    <div className="bg-gradient-to-r from-green-700 to-green-950 min-h-screen px-5 md:px-10 lg:px-20 mx-auto">
      <div className="flex flex-col lg:flex-row justify-around items-center py-10 md:py-20 lg:py-28">
        <div className="max-w-[520px] space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bebas">
            BETTER THAN <span className="text-[#40FE5B]">JUPITER</span>
          </h1>
          <p>
            In the digital realm of innovation and efficiency, $SAT lights the
            path to a brighter future. It fuels progress in the world of utility
            tokens.
          </p>
          <button className="btn bg-[#02B81C] border-[#40FE5B] text-white">
            BUY NOW
          </button>
        </div>

        <div>
          {/* Countdown start */}
          <div className="mt-5 md:mt-0 bg-green-900 border-2 border-green-800 text-center px-10 md:px-16 lg:px-20 py-5 rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bebas mb-5">
              PRESALE ENDS IN
            </h3>

            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 border-2 border-green-800 rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": hours }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 border-2 border-green-800 rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": minutes }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 border-2 border-green-800 rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": seconds }}></span>
                </span>
                sec
              </div>
            </div>
          </div>
          {/* countdown end */}

          {/* token Details start */}
          <div className="mt-5 bg-green-900 border-2 border-green-800 px-5 py-5 rounded-xl">
            {/* Token name start */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Token Name:</span>
                <span className="text-sm text-green-500">$SAT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Presale Price:</span>
                <span className="text-sm text-green-500">$0.0001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Launch Price:</span>
                <span className="text-sm text-green-500">$0.0003</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Presale Bonus:</span>
                <span className="text-sm text-green-500">15%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Max Buy:</span>
                <span className="text-sm text-green-500">25 SOL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Min Buy:</span>
                <span className="text-sm text-green-500">0.5 SOL</span>
              </div>
            </div>
            {/* Token name end */}
            {/* Presale sold percentage  start*/}
            <div className="mt-2 bg-green-800 border-2 border-green-700 px-2 py-2 rounded-lg">
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Presale Sold</span>
                <span className="text-sm text-green-500">87%</span>
              </div>
              <ProgressBar bgColor="#40FE5B" baseBgColor="#02B81C1A" height="10px" completed={87} customLabel=" " className="w-full mt-1" />

            </div>
            {/* Presale sold percentage  end*/}

            {/* Token amount start */}
            <h5 className="text-sm text-gray-400 mt-3 mb-1">Amount in SOL you pay:</h5>
            <div className="flex justify-between items-center bg-green-800 border-2 border-green-700 px-1 py-1 rounded-lg">
                <div className="flex justify-around items-center bg-green-700 border-2 border-green-600 w-28 p-1 rounded-lg
                ">
                    <img className="w-9 rounded-full" src={img1} alt="" />
                    <h3 className="text-2xl font-semibold">SOL</h3>
                </div>
                <div className="text-2xl font-semibold">0</div>
            </div>
            {/* Token amount end */}
            <hr className="my-5 border-green-700" />

            {/* Token amount receive start */}
            <h5 className="text-sm text-gray-400 mt-3 mb-1">Amount in SAT you receive:</h5>
            <div className="flex justify-between items-center bg-green-800 border-2 border-green-700 px-1 py-1 rounded-lg">
                <div className="flex justify-around items-center bg-green-700 border-2 border-green-600 w-28 p-1 rounded-lg
                ">
                    <img className="w-9 rounded-full" src={img2} alt="" />
                    <h3 className="text-2xl font-semibold">SAT</h3>
                </div>
                <div className="text-2xl font-semibold">0</div>
            </div>
            {/* Token amount receive end */}

            <button className="btn w-full mt-5 bg-[#02B81C] text-white border-green-600">Connect Wallet</button>
            
          </div>
        </div>
      </div>


      {/* Banner second step */}
      <div className="flex flex-col md:flex-row justify-around items-center lg:pr-64">
        {/* left side */}
        <div>
          <img src={banner2} alt="" />
        </div>

        {/* right side */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bebas font-bold">The <span className="text-[#02B81C]">$SAT</span> Token</h1>

          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#02B81C] rounded-full"></div>
            <div>Real utility-focused token</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#02B81C] rounded-full"></div>
            <div>Holders decide everything via voting</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#02B81C] rounded-full"></div>
            <div>Weekly raffles and giveaways</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#02B81C] rounded-full"></div>
            <div>Launching staking very soon</div>
          </div>
          
          <button className="btn bg-[#02B81C4D] border-2 border-green-700">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
