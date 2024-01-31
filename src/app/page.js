import burgerMenu from "./components/burger"
import Image from "next/image";

function App() {
  return (
    <main className="bg-black">
      <nav>
        <a className="m-4 text-size-12">=</a>
      </nav>
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
          <h1 className="text-2xl pb-2">New Dishes</h1>
          <button className="flex justify-center gap-3 items-center">All<Image width="13" height="10" alt="" src="/images/red_arrow.svg"></Image></button>
        </div>
          <div className="flex justify-evenly">
              <div id="food-item" className="bg-[#252830] rounded-xl w-5/12 h-80 flex text-base mx-2 flex-col">
              <a href="food-items"> 
                <div className="w-18 h-18 ">
                <Image width="160" height="160" alt="" src="/images/unsplash_TqOEGdRNowY.svg"></Image>
                </div>
                <div className="flex flex-col items-center">
                  <p className="py-2">Fried Shrimp</p>
                  <div className="text-slate-500 text-xs flex gap-2">
                  <Image width="10" height="10" alt="" src="/images/star.svg"></Image>
                  <p>4.8(163)</p>
                  <Image width="10" height="10" alt="" src="images/group.svg"></Image>
                  <p>20 min</p>
                  </div>
                  <p className="text-red-400 py-4">€29.00</p>
                </div>
                </a>
              </div>
              
                <div id="food-item" className="bg-[#252830] rounded-xl w-5/12 h-80 flex text-base mx-2 flex-col">
                <a href="food-items">
                  <div className="w-18 h-18 ">
                  <Image width="160" height="160" alt="" src="/images/unsplash_TqOEGdRNowY.svg"></Image>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="py-2">Fried Shrimp</p>
                    <div className="text-slate-500 text-xs flex gap-2">
                    <Image width="10" height="10" alt="" src="/images/star.svg"></Image>
                    <p>4.8(163)</p>
                    <Image width="10" height="10" alt="" src="images/group.svg"></Image>
                    <p>20 min</p>
                    </div>
                    <p className="text-red-400 py-4">€29.00</p>
                  </div>
                </a>
                </div>
            </div>
      </div>

      
      <footer className="flex w-full justify-around absolute bottom-0 py-5">
      <Image width="35" height="35" alt="" src="/images/cooking.svg"></Image>
      <Image width="35" height="35" alt="" src="/images/category.svg"></Image>
      <Image width="35" height="35" alt="" src="/images/heart.svg"></Image>
      <Image width="35" height="35" alt="" src="/images/buy.svg"></Image>
      </footer>
    </main>
    )
}

export default App;