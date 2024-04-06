import { useReducer } from 'react';

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
      case 'SET_SELECTED':
      return { ...state, selected: action.payload };
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
  const { sliderIndex, fat ,selected  } = state;
  console.log("App ~ selected:", selected)

  function changeFat(e) {
    const newFat = e.target.value;
    const newSelected = false;
    let newSliderIndex = 3;
    if (newFat >= 35) {
      newSliderIndex = 0;
    } else if (newFat > 25 && newFat < 35) {
      newSliderIndex = 1;
    } else if (newFat > 15 && newFat < 25) {
      newSliderIndex = 2;
    }
    dispatch({ type: 'SET_SELECTED', payload: newSelected });
    dispatch({ type: 'SET_SLIDER_INDEX', payload: newSliderIndex });
    dispatch({ type: 'SET_FAT', payload: newFat });
  }

  function changeIndex(action) {
    const newSelected = false;
    dispatch({ type: 'SET_SELECTED', payload: newSelected });
    let newFat = fat;
    let newIndex = sliderIndex;

    if (action === 'right') {
      newIndex = newIndex === 0 ? sliderImages.length - 1 : newIndex - 1;
    } else if (action === 'left') {
      newIndex = (newIndex + 1) % sliderImages.length;
    }else {
   newIndex = action
    }

    switch (newIndex) {
      case 0:
        newFat = 35;
        break;
      case 1:
        newFat = 25;
        break;
      case 2:
        newFat = 15;
        break;
      default:
        newFat = 5;
    }

    dispatch({ type: 'SET_SLIDER_INDEX', payload: newIndex });
    dispatch({ type: 'SET_FAT', payload: newFat });
  }

  function toggleCheckbox() {
    const newSelected = !selected;
    dispatch({ type: 'SET_SELECTED', payload: newSelected });
  }

  return (
    <div className="h-[140svh] bg-slate-900  pt-10 text-stone-300">
      <div className="mx-auto h-fit w-4/5 rounded-md bg-zinc-700 px-2 pb-10 pt-2 text-sm sm:w-3/5 md:w-2/5 lg:w-2/6">
        <header className="rounded-md border-t border-zinc-600 p-1  shadow-sm  shadow-zinc-600">
          <div className="pt-1">
            <img className="m-3 h-5 w-5" src="/images/menu.png" alt="" />
          </div>
          <ul className="my-2 list-disc px-7 text-lg font-bold marker:text-lime-400">
            <li>درصد چربی بدن</li>
          </ul>
        </header>

        <div className="mx-1 my-4 p-2  shadow-sm shadow-slate-600">
          <p>نزدیک ترین تصویر را به بدن خود انتخاب کنید</p>
        </div>

        <section className="h-[170px] w-full">
          <div
            style={{ backgroundImage: `url(${sliderImages[sliderIndex]})` }}
            className="relative h-full w-full bg-contain bg-center bg-no-repeat duration-500"
          >
            <div className="text-lime-400 *:absolute *:top-16 *:cursor-pointer  *:border-none *:text-6xl *:2xl:text-9xl">
              <button onClick={() => changeIndex('left')} className=" left-2 ">
                &#8250;
              </button>
              <button
                onClick={() => changeIndex('right')}
                className="right-2  "
              >
                &#8249;
              </button>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center mb-8">
          <div>
            <label className="container">
              <input onChange={toggleCheckbox} value={selected} checked={selected} type="checkbox" name="checkbox" id="m" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <div className="w-full  mx-auto text-center">
          <p className='pr-2 text-lg text-lime-200'>{fat}</p>
          <input
            onChange={changeFat}
            dir="ltr"
            min="5"
            max="45"
            className="my-3 h-2 w-4/5 appearance-none rounded-full bg-lime-500"
            type="range"
            value={fat}
          />
        </div>

        <div className="relative my-7 ">
          <ul className=" absolute left-[50%] top-0 flex  -translate-x-[50%] gap-3 duration-1000 *:h-2 *:w-2 *:rounded-full *:bg-white sm:top-0  sm:gap-5   ">
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

        <div 
        style={{backgroundColor:`${selected ? "#a3e635" : ""}`,
        color:`${selected ? "#3f3f46" : ""}`}} className="mx-auto mt-20 flex h-8 w-4/5 items-center justify-center font-semibold border-t border-lime-300 bg-zinc-700 shadow-sm  shadow-lime-300">
          <span>تایید و ادامه</span>
        </div>
      </div>
    </div>
  );
}

export default App;
