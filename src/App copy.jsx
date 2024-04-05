import {  useState } from 'react';

function App() {
  const sliderImages = [
    '/images/boy44.png',
    '/images/boy33.png',
    '/images/boy22.png',
    '/images/boy11.png',
  ];
  const [sliderIndex, setSliderIndex] = useState(3);
  console.log("App ~ sliderIndex:", sliderIndex)
  const [fat, setFat] = useState(5);
  console.log("App ~ fat:", fat)
  function changeFat(e) {
   
    if (fat >= 35 ) {
      setSliderIndex(0);
    } else if (fat > 25 && fat < 35) {
      setSliderIndex(1);
    } else if (fat > 15 && fat < 25) {
      setSliderIndex(2);
    } else {
      setSliderIndex(3);
    }
    setFat(e.target.value);
  }


  function changeIndex(index) {
    setSliderIndex(index);
    index === 0
      ? setFat(36)
      : index === 1
        ? setFat(26)
        : index === 2
          ? setFat(16)
          : setFat(5);
  }
  return (
    <div className="h-[200svh] bg-slate-900 px-[5%] pt-20 text-stone-300">
      <div className="mx-auto  h-[105svh] w-4/5  rounded-md bg-zinc-700 text-xs ">
        <header>
          <div className="pt-1">
            <img className="m-3 h-5 w-5 " src="/images/menu.png" alt="" />
          </div>
          <ul className="my-2 list-disc px-7 text-sm  marker:text-lime-400 ">
            <li>درصد چربی بدن</li>
          </ul>
        </header>

        <div className="mx-1 my-4">
          <p>نزدیک ترین تصویر را به بدن خود انتخاب کنید</p>
        </div>
        <section className="h-[180px] w-full ">
          <div
            style={{ backgroundImage: `url(${sliderImages[sliderIndex]})` }}
            className="relative h-full w-full bg-contain bg-center bg-no-repeat duration-500"
          >
            <div className="text-lime-400 *:absolute *:top-16 *:cursor-pointer  *:border-none *:text-6xl *:2xl:text-9xl">
              <button className=" left-2 ">&#8250;</button>
              <button className="right-2  ">&#8249;</button>
            </div>
          </div>
        </section>
        <div>
          <label htmlFor="">
            <input
              type="radio"
              className="mx-auto my-3 block rounded-full checked:text-lime-300"
            />
          </label>
        </div>
        <div className="w-1/1 mx-auto text-center">
          <p>{fat}</p>
          <input
            onChange={changeFat}
            dir="ltr"
            min="5"
            max="45"
            className="  my-3 h-2 w-4/5 appearance-none rounded-full bg-lime-500"
            type="range"
            value={fat}
          />
        </div>
        <div className="relative my-7 ">
          <ul className=" absolute left-[50%] top-0 flex -translate-x-[50%] gap-3 duration-1000 *:h-2 *:w-2 *:rounded-full *:bg-white sm:top-[25rem] sm:gap-4  md:top-[29rem] md:gap-5 ">
            {sliderImages.map((url, index) => (
              <li
                className="duration-500"
                onClick={() => changeIndex(index)}
                key={url}
                style={{
                  backgroundColor: `${sliderIndex === index ? '#bef264' : '#84cc16'}`,
                  width: `${sliderIndex === index ? '30px' : ''}`,
                }}
              ></li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-20 flex h-8 w-4/5 items-center justify-center border-t border-lime-300 bg-zinc-800 shadow-sm shadow-lime-300">
          <span> تایید و ادامه</span>
        </div>
      </div>
    </div>
  );
}

export default App;
