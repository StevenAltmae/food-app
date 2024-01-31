import Image from "next/image";

function App() {
  return (
    <main className="bg-black">
          <div className="">
              <div id="food-item" className="items-center flex text-base p-6 flex-col">
                <div className="justify-between flex w-full">
                <a href="page.js"><Image width="12" height="12" alt="" src="/images/stroke 1.svg"></Image></a>
                <Image width="32" height="32" alt="" src="/images/heart.svg"></Image>
                </div>
                <div className="w-18 h-18 py-16">
                <Image width="240" height="240" alt="" src="/images/unsplash_TqOEGdRNowY.svg"></Image>
                </div>
                <div className="flex flex-col items-center m-6">
                  <p className="py-2">Fried Shrimp</p>
                  <p className="text-slate-500 text-xs p-4">This is my kind of breakfast egg sandwich and it takes under 5 minutes to make</p>
                  <div className="text-slate-500 text-xs flex gap-2">
                  <Image width="10" height="10" alt="" src="/images/star.svg"></Image>
                  <p>4.8(163)</p>
                  <Image width="10" height="10" alt="" src="images/group.svg"></Image>
                  <p>20 min</p>
                  <Image width="10" height="10" alt="" src="/images/Vector.svg"></Image>
                  <p>150 kcal</p>
                  </div>
                </div>
                <div id="ingridients">
                    <div className="flex justify-between gap-32 py-6">
                      <h1>ingridients</h1>
                      <p className="text-slate-500 text-x">7 item</p>
                    </div>
                    <div className="flex justify-evenly gap-2">
                    <div id="food-item" className="bg-[#252830] rounded-xl flex text-base px-2 flex-col items-center justify-center h-32">
                    <Image width="48" height="48" alt="" src="/images/mask group.svg"></Image>
                    <p>Broccoli</p>
                    </div>
                    <div id="food-item" className="bg-[#252830] rounded-xl flex text-base px-4 flex-col justify-center items-center">
                    <Image width="48" height="48" alt="" src="/images/mask group(1).svg"></Image>
                    <p>Chili</p>
                    </div>
                    <div id="food-item" className="bg-[#252830] rounded-xl flex text-base px-4 flex-col justify-center items-center">
                    <Image width="48" height="48" alt="" src="/images/mask group(2).svg"></Image>
                    <p>Corn</p>
                    </div>
                    <div id="food-item" className="bg-[#252830] rounded-xl flex text-base px-4 justify-center flex-col">
                    <Image width="48" height="48" alt="" src="/images/mask group(3).svg"></Image>
                    <p>Carrot</p>
                    </div>
                    </div>
                </div>
                <p className="text-red-400 py-4">€29.00</p>
              </div>
          </div>
    </main>
    )
}

export default App;