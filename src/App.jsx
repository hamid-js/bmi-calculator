import  { useReducer } from 'react';

const initialState = {
  sliderIndex: 3,
  fat: 5,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SLIDER_INDEX':
      return { ...state, sliderIndex: action.payload };
    case 'SET_FAT':
      return { ...state, fat: action.payload };
    default:
      return state;
  }
}

function App() {
  const sliderImages = [
    '/images/boy4.png',
    '/images/boy3.png',
    '/images/boy2.png',
    '/images/boy1.png',
  ];
  const [state, dispatch] = useReducer(reducer, initialState);
  const { sliderIndex, fat } = state;

  function changeFat(e) {
    const newFat = e.target.value;

    let newSliderIndex = 3;
    if (newFat >= 35) {
      newSliderIndex = 0;
    } else if (newFat > 25 && newFat < 35) {
      newSliderIndex = 1;
    } else if (newFat > 15 && newFat < 25) {
      newSliderIndex = 2;
    }

    dispatch({ type: 'SET_SLIDER_INDEX', payload: newSliderIndex });
    dispatch({ type: 'SET_FAT', payload: newFat });
  }

  function changeIndex(index) {
    let newFat = 5;
    switch (index) {
      case 0:
        newFat = 36;
        break;
      case 1:
        newFat = 26;
        break;
      case 2:
        newFat = 16;
        break;
      default:
        newFat = 5;
        break;
    }

    dispatch({ type: 'SET_SLIDER_INDEX', payload: index });
    dispatch({ type: 'SET_FAT', payload: newFat });
  }

  return (
    <div className="h-[140svh] bg-slate-900  pt-10 text-stone-300">
     
      <div className="mx-auto h-[110svh] px-2 w-4/5 rounded-md bg-zinc-700 text-sm">
        <header>
          <div className="pt-1">
            <img className="m-3 h-5 w-5" src="/images/menu.png" alt="" />
          </div>
          <ul className="my-2 list-disc px-7 text-lg font-bold marker:text-lime-400">
            <li>درصد چربی بدن</li>
          </ul>
        </header>

        <div className="mx-1 my-4">
          <p>نزدیک ترین تصویر را به بدن خود انتخاب کنید</p>
        </div>

        <section className="h-[180px] w-full">
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
           step="5"
            min="5"
            max="45"
            className="my-3 h-2 w-4/5 appearance-none rounded-full bg-lime-500"
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

        <div className="mx-auto mt-20 flex h-8 w-4/5 items-center justify-center border-t border-lime-300 bg-zinc-700 shadow-sm shadow-lime-300">
          <span>تایید و ادامه</span>
        </div>
      </div>
    </div>
  );
}

export default App;


