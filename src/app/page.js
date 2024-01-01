import burgerMenu from "./components/burger"
import Image from "next/image";

function App() {
  return (
    <main className="bg-black">
      <header className="flex justify-between py-6 px-2">
        <div>
          <burgerMenu></burgerMenu>
          <div>
            <p className="text-gray-500 text-xs">Good morning</p>
            <p>Foo Fighters</p>
          </div>
        </div>
        <div>
          <p className="text-2xl">🍔</p>
        </div>
      </header>
      <div id="search" className="mx-auto flex justify-center">
        <div className="bg-[#252830] w-96 h-20 px-4 rounded-xl flex justify-between">
          <input className="bg-[#252830]" type="text" id="myInput" placeholder="Find your dishes"></input>
          <Image width="35" height="35" alt="" src="/images/Filter.svg"></Image>
        </div>
      </div>
      <div id="categories">
        <div className="flex justify-between p-4">
          <h1 className="text-2xl">Categories</h1>
          <button className="flex justify-center gap-3 items-center">All<Image width="13" height="10" alt="" src="/images/red_arrow.svg"></Image></button>
        </div>
        <div className="flex justify-start">
          <div id="burger" className="bg-[#252830] rounded-xl w-32 h-12 flex justify-around items-center text-base mx-2">
            <p className="text-[#8E94A4]">🍔  Burger</p>
          </div>
          <div className="bg-[#252830] rounded-xl w-32 h-12 flex justify-around items-center text-base mx-2">
            <p className="text-[#8E94A4]">🌭 Sandwich</p>
          </div>
        </div>
      </div>
      <div id="dishes">
        <div className="flex justify-between px-4 pt-12">
          <h1 className="text-2xl">New Dishes</h1>
          <button className="flex justify-center gap-3 items-center">All<Image width="13" height="10" alt="" src="/images/red_arrow.svg"></Image></button>
          </div>
          <div className="flex justify-center">
            <div id="burger" className="bg-[#252830] rounded-xl w-5/12 h-80 flex text-base mx-2">
              <Image width="160" height="160" alt="" src="/images/unsplash_TqOEGdRNowY.svg"></Image>
              <div className="">
                <p>Fried Shrimp</p>
                <Image width="10" height="10" alt="" src="/images/star.svg"></Image>

              </div>
            </div>
            <div id="burger" className="bg-[#252830] rounded-xl w-5/12 h-80 flex justify-around items-center text-base mx-2">
              <Image width="160" height="160" alt="" src="/images/Frame 48095716.svg"></Image>
              <div>
                <p>Fried Shrimp</p>
                <Image width="10" height="10" alt="" src="/images/star.svg"></Image>

              </div>
            </div>
          </div>
      </div>

      
      <footer className="flex justify-around">
      <Image width="35" height="35" alt="" src="/images/cooking.svg"></Image>
      <Image width="35" height="35" alt="" src="/images/category.svg"></Image>
      <Image width="35" height="35" alt="" src="/images/heart.svg"></Image>
      <Image width="35" height="35" alt="" src="/images/buy.svg"></Image>
      </footer>
    </main>
    )
}

export default App;