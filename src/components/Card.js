import { useEffect, useRef, useState } from "react";
import check from "../images/icon-check.svg";

const Card = () => {
  const rangeRef = useRef();
  const [slideValue, setSlideValue] = useState(2);
  const [billingType, setBillingType] = useState("monthly");

  const dataObj = [
    {
      pageViews: "10K",
      price: 8,
      priceDisc: 8 - 8 * 0.25,
    },
    {
      pageViews: "50K",
      price: 12,
      priceDisc: 12 - 12 * 0.25,
    },
    {
      pageViews: "100K",
      price: 16,
      priceDisc: 16 - 16 * 0.25,
    },
    {
      pageViews: "500K",
      price: 24,
      priceDisc: 24 - 24 * 0.25,
    },
    {
      pageViews: "1M",
      price: 36,
      priceDisc: 36 - 36 * 0.25,
    },
  ];

  const toggleBillingType = () => {
    if (billingType === "monthly") {
      setBillingType("yearly");
    } else if (billingType === "yearly") {
      setBillingType("monthly");
    }
  };

  const handleChange = (e) => {
    e.target.style.setProperty("--min", e.target.min === "" ? "0" : e.target.min);
    e.target.style.setProperty("--max", e.target.max === "" ? "100" : e.target.max);
    e.target.style.setProperty("--value", e.target.value);
    const rangeValue = rangeRef.current;
    setSlideValue(rangeValue.value);
  };

  useEffect(() => {
    const rangeValue = rangeRef.current;
    rangeValue.style.setProperty("--min", rangeValue.min === "" ? "0" : rangeValue.min);
    rangeValue.style.setProperty("--max", rangeValue.max === "" ? "100" : rangeValue.max);
    rangeValue.style.setProperty("--value", rangeValue.value);
    setSlideValue(rangeValue.value);
  }, []);

  return (
    <main className="pt-16 pb-12 px-12 bg-white flex flex-col  rounded-3xl md:py-10 md:px-20">
      <div className="page-views-wrap md:flex md:items-center md:justify-between">
        <div className="page-views text-2xl mb-5  uppercase tracking-widest font-bold md:m-0">
          {dataObj[slideValue].pageViews} pageviews
        </div>
        <div className="price price-desktop py-10 my-5 flex gap-4 justify-center items-center hidden md:flex md:gap-2">
          <span className="price-num text-6xl font-extrabold ">
            ${billingType === "monthly" ? dataObj[slideValue].price : dataObj[slideValue].priceDisc}
            .00
          </span>
          / month
        </div>
      </div>
      <div className="slider pt-10 md:pt-0">
        <input
          className="styled-slider slider-progress"
          type="range"
          min="0"
          max="4"
          step="1"
          value={slideValue}
          name="range-input"
          id="range-input"
          onChange={(e) => handleChange(e)}
          ref={rangeRef}
        />
      </div>
      <div className="price pt-10 my-5 flex gap-4 justify-center items-center md:py-0 md:hidden">
        <span className="price-num text-5xl font-extrabold ">
          {billingType === "monthly" ? dataObj[slideValue].price : dataObj[slideValue].priceDisc}
          .00
        </span>
        / month
      </div>
      <div className="bill-type flex items-center justify-center my-3 py-10">
        <label>
          <p id="monthly-billing">Monthly Billing</p>
          <input type="checkbox" role="switch" onChange={toggleBillingType} />
          <p id="yearly-billing">Yearly Billing</p>
          <div className="discount font-bold rounded-full  py-1.5 px-3 md:gap-2 md:flex">
            -25%
            <span className="discount-text hidden md:inline-block"> discount</span>
          </div>
        </label>
      </div>
      <div className="info border-t md:pt-14 md:pb-5 md:flex md:justify-between md:items-center">
        <ul className="py-16 text-xl	 flex flex-col gap-4 md:py-0">
          <li>
            <img src={check} alt="checkmark" />
            Unlimited websites
          </li>
          <li>
            <img src={check} alt="checkmark" />
            100% data ownership
          </li>
          <li>
            <img src={check} alt="checkmark" />
            Email reports
          </li>
        </ul>
        <button className="start-trial-btn text-xl md:text-2xl py-5 px-16 rounded-full ">
          Start my trial
        </button>
      </div>
    </main>
  );
};

export default Card;
