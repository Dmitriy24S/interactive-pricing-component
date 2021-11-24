import check from "../images/icon-check.svg";

const Card = () => {
  return (
    <main className="py-20 px-14 shadow-xl rounded-3xl md:py-10 md:px-20">
      <div class="page-views-wrap">
        <div className="page-views text-2xl mb-5  uppercase tracking-widest font-bold">
          100K pageviews
        </div>
        <div class="price price-desktop py-10 my-5 flex gap-4 justify-center items-center">
          <span class="price-num text-6xl font-extrabold ">$16.00</span> / month
        </div>
      </div>
      <div class="slider pt-10">
        <input type="range" min="1" max="100" name="range-input" id="range-input" />
      </div>
      <div class="price py-10 my-5 flex gap-4 justify-center items-center md:py-0">
        <span class="price-num text-5xl font-extrabold ">$16.00</span> / month
      </div>
      <div class="bill-type flex items-center justify-center gap-8 my-3 md:py-10">
        Monthly Billing
        <button>o</button>
        Yearly Billing
        <div class="discount rounded-full  py-1.5 px-3">
          -25%
          <span class="discount-text"> discount</span>
        </div>
      </div>
      <div class="info md:border-t md:pt-14 md:pb-5">
        <ul className="py-16 flex flex-col gap-4   md:py-0">
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
        <button className="start-trial-btn py-6 px-20 rounded-full ">Start my trial</button>
      </div>
    </main>
  );
};

export default Card;
