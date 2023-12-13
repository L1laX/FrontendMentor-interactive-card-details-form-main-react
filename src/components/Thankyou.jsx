/* eslint-disable react/prop-types */
import Button from "./Button";

const Thankyou = ({ onComplete }) => {
  return (
    <section>
      <div className="container mx-auto my-10 flex max-w-[375px] flex-col items-center gap-7 xl:ml-10  xl:h-screen xl:justify-center">
        <img
          className="h-30 w-30"
          src="/src/assets/images/icon-complete.svg"
          alt=""
        />
        <h1 className="text-3xl font-extrabold">THANK YOU !</h1>
        <p className="font-light">We&apos;ve added your card details</p>
        <Button onClick={onComplete} display="Continue" />
      </div>
    </section>
  );
};

export default Thankyou;
