import PropTypes from "prop-types";
const Cardsection = ({ pushData }) => {
  return (
    <section className=" mb-20 w-full bg-[url('/src/assets/images/bg-main-mobile.png')] bg-cover bg-no-repeat xl:mb-0 xl:mr-64 xl:h-full xl:w-1/3">
      <section className="card-section-box relative mx-auto h-[200px] max-w-[375px] xl:right-0 xl:h-full xl:max-w-full">
        <div className="back-card xl: absolute right-5 top-5 w-60 shadow-xl xl:-right-28 xl:top-[45%] xl:scale-150">
          <img
            className="absolute left-2 "
            src="/src/assets/images/bg-card-back.png"
            alt="backcard background"
          />
          <div className="back-card-content relative">
            <p className="cvv-code absolute right-7 top-[55px] text-sm text-white">
              {!pushData.cvv ? "---" : pushData.cvv}
            </p>
          </div>
        </div>
        <div className="front-card absolute -bottom-8 right-[7.5rem] w-60 shadow-xl xl:-right-5 xl:bottom-[60%] xl:scale-150">
          <img
            src="/src/assets/images/bg-card-front.png"
            alt="frontcard background"
          />
          <div className="front-card-container absolute top-0 flex h-full w-full flex-col justify-between gap-7">
            <div className="card-logo px-5 pt-4">
              <img
                className="h-6"
                src="/src/assets/images/card-logo.svg"
                alt="card logo"
              />
            </div>
            <div className="card-content flex flex-col gap-2 text-[hsl(0,0%,100%)]">
              <div className="number px-5  text-lg font-semibold">
                {!pushData.cardNumber
                  ? "0000 0000 0000 0000"
                  : pushData.cardNumber}
              </div>
              <div className="lower-content flex justify-between px-3">
                <p className="card-name text-sm font-extralight">
                  {pushData.cardName === "" ? "John Dol" : pushData.cardName}
                </p>
                <p className="card-exp pb-1 text-sm font-extralight">
                  {!pushData.expMonth ? "--" : pushData.expMonth}/
                  {!pushData.expYear ? "--" : pushData.expYear}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

Cardsection.propTypes = {
  pushData: PropTypes.any,
};

export default Cardsection;
