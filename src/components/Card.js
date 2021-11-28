import { useEffect, useRef } from "react";
import check from "../images/icon-check.svg";

const Card = () => {
  const rangeRef = useRef();

  useEffect(() => {
    const rangeValue = rangeRef.current;
    rangeValue.style.setProperty("--min", rangeValue.min === "" ? "0" : rangeValue.min);
    rangeValue.style.setProperty("--max", rangeValue.max === "" ? "100" : rangeValue.max);
    rangeValue.style.setProperty("--value", rangeValue.value);
  }, []);

  const handleChange = (e) => {
    e.target.style.setProperty("--min", e.target.min === "" ? "0" : e.target.min);
    e.target.style.setProperty("--max", e.target.max === "" ? "100" : e.target.max);
    e.target.style.setProperty("--value", e.target.value);
  };

  return (
    <main className="py-20 px-12 bg-white flex flex-col shadow-xl rounded-3xl md:py-10 md:px-20">
      <div className="page-views-wrap md:flex md:items-center md:justify-between">
        <div className="page-views text-2xl mb-5  uppercase tracking-widest font-bold md:m-0">
          100K pageviews
        </div>
        <div className="price price-desktop py-10 my-5 flex gap-4 justify-center items-center hidden md:flex md:gap-2">
          <span className="price-num text-6xl font-extrabold ">$16.00</span> / month
        </div>
      </div>
      <div className="slider pt-10 md:pt-0">
        <input
          className="styled-slider slider-progress"
          type="range"
          min="1"
          max="100"
          name="range-input"
          id="range-input"
          onChange={(e) => handleChange(e)}
          ref={rangeRef}
        />
      </div>
      <div className="price py-10 my-5 flex gap-4 justify-center items-center md:py-0 md:hidden">
        <span className="price-num text-5xl font-extrabold ">$16.00</span> / month
      </div>
      <div className="bill-type flex items-center justify-center gap-8 my-3 py-10">
        <label>
          Monthly Billing
          <input type="checkbox" role="switch" indeterminate />
          Yearly Billing
        </label>
        <div className="discount font-bold rounded-full  py-1.5 px-3 md:gap-2 md:flex">
          -25%
          <span className="discount-text hidden md:inline-block"> discount</span>
        </div>
      </div>
      <div className="info border-t md:pt-14 md:pb-5 md:flex md:justify-between md:items-center">
        <ul className="py-16 flex flex-col gap-4 md:py-0">
          <li>
            <img src={check} alt="" />
            Unlimited websites
          </li>
          <li>
            <img src={check} alt="" />
            100% data ownership
          </li>
          <li>
            <img src={check} alt="" />
            Email reports
          </li>
        </ul>
        <button className="start-trial-btn py-5 px-20 rounded-full ">Start my trial</button>
      </div>
    </main>
  );
};

export default Card;
