import Feature from "./Feature";
import { LuServerOff, LuMemoryStick, LuLock } from "react-icons/lu";

const Features = () => {
  const data = [
    {
      id: 0,
      title: "Device-to-Device Sharing",
      disc: "When you close the browser tab your files are no longer accessible. FilEnd uses WebRTC to find the shortest path, meaning sometimes your data doesn't even have to leave the building!",
      icon: LuServerOff,
    },
    {
      id: 1,
      title: "Unlimited file sizes",
      disc: "Because we don't store the data, there's no need for file size limits. Just share files of any size or whatever amount. As long as you keep an eye on your own data usage.",
      icon: LuMemoryStick,
    },
    {
      id: 2,
      title: "Exclusive access",
      disc: "Only you and the receiver can access your files. Your data is encrypted end-to-end, and can only be read by your receiver (and you of course). Means exclusive access.",
      icon: LuLock,
    },
  ];

  return (
    <section className="pt-10 pb-5 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                FilEnd Has Everything You Need!
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {data.map((item) => (
            <Feature key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
