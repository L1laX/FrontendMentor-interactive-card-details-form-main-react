import Button from "./Button";
import PropTypes from "prop-types";
const Formsection = ({ getData, getUser, getvalidateData, userValidated }) => {
  return (
    <section>
      <form
        action=""
        className=" mx-auto flex max-w-[375px] flex-col gap-3 p-4 xl:h-screen xl:max-w-[500px] xl:items-start xl:justify-center"
      >
        <div className="input-name flex flex-col gap-2 px-2 xl:w-full">
          <label className="font-spaceGrotesk" htmlFor="name">
            CARDHOLDER NAME
          </label>
          <input
            className={`w-full rounded-md border  p-1 ${
              !userValidated.validateName ? "border" : "border-red-500"
            }`}
            type="text"
            id="name"
            name="name"
            placeholder="e.g Jane Appleseed"
            required
            minLength={1}
            maxLength={20}
            onChange={getData}
            value={getUser.cardName}
          />
          <div className="validate-name text-sm text-red-500">
            <h1>{userValidated.validateName}</h1>
          </div>
        </div>
        <div className="input-card-number flex flex-col gap-2 px-2 xl:w-full">
          <label htmlFor="number">CARD NUMBER</label>
          <input
            className={`w-full rounded-md border  p-1 ${
              !userValidated.validateNumber ? "border" : "border-red-500"
            }`}
            type="text"
            id="number"
            name="number"
            minLength={19}
            maxLength={19}
            required
            placeholder="e.g. 1234 5678 9123 0000"
            value={getUser.cardNumber}
            onChange={getData}
          />
        </div>
        <div className="validate-card-number pl-2 text-sm text-red-500">
          <h1>{userValidated.validateNumber}</h1>
        </div>

        <div className="exp-cvv-content flex gap-5 px-2">
          <div className="exp w-/4 flex flex-col">
            <label htmlFor="month">EXP.DATE (MM/YY)</label>
            <div className="input-date flex w-[10rem] flex-col gap-2">
              <div className="input-date-box flex gap-3">
                <input
                  className={`w-full rounded-md border  p-1 ${
                    !userValidated.validateMonth ? "border" : "border-red-500"
                  }`}
                  type="text"
                  name="month"
                  id="month"
                  placeholder="MM"
                  maxLength={2}
                  minLength={2}
                  value={getUser.expMonth}
                  onChange={getData}
                />
                <input
                  className={`w-full rounded-md border  p-1 ${
                    !userValidated.validateYear ? "border" : "border-red-500"
                  }`}
                  type="text"
                  name="year"
                  id="year"
                  placeholder="YY"
                  maxLength={2}
                  minLength={2}
                  value={getUser.expYear}
                  onChange={getData}
                />
              </div>
              <h1 className="border-red-500 text-sm text-red-500">
                {userValidated.validateMonth === "Can't be blank" ||
                userValidated.validateYear === "Can't be blank"
                  ? "Can't be blank"
                  : userValidated.validateMonth === "Wrong formet" ||
                      userValidated.validateYear === "Wrong formet"
                    ? "Wrong formet"
                    : ""}
              </h1>
            </div>
          </div>
          <div className="cvv flex w-2/4 flex-col">
            <label htmlFor="cvvNumber">CVV</label>
            <input
              className={`w-full rounded-md border  p-1 ${
                !userValidated.validateCvv ? "border" : "border-red-500"
              }`}
              type="text"
              name="cvvNumber"
              id="cvvNumber"
              maxLength={3}
              minLength={3}
              required
              placeholder="e.g. 123"
              value={getUser.cvv}
              onChange={getData}
            />
            <h1 className="pt-2 text-sm text-red-500">
              {userValidated.validateCvv}
            </h1>
          </div>
        </div>
        <Button onClick={getvalidateData} display="Confirm" />
      </form>
    </section>
  );
};
Formsection.propTypes = {
  cardName: PropTypes.string,
  cardNumber: PropTypes.number,
  expMonth: PropTypes.number,
  expYear: PropTypes.number,
  cvv: PropTypes.number,
  getData: PropTypes.any,
  getUser: PropTypes.any,
  getvalidateData: PropTypes.any,
  userValidated: PropTypes.any,
};

export default Formsection;
