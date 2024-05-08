import { FC } from 'react';
import chip from '/chip.svg';
import cardtype from '/cardtype.svg';

const CreditCard: FC = () => {
  return (
    <div className=" text-white bg-gradient-to-br from-gradient-start to-gradient-end rounded-3xl pt-4 px-5 shrink-0">
      <div className="flex items-center justify-between mb-6 xl:mb-8">
        <div>
          <span className="block text-xs">BALANCE</span>
          <span className="text-base font-semibold xl:text-lg">$5.756</span>
        </div>
        <img src={chip} alt="card chip" />
      </div>
      <div className="flex justify-between mb-6">
        <div>
          <span className="block text-xs">CARD HOLDER</span>
          <span className="text-base">Eddy Cusuma</span>
        </div>
        <div>
          <span className="block text-xs">VALID THRU</span>
          <span className="text-base">12/22</span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-gradient-to-b from-secondary-white py-5 px-6 -mx-5">
        <span className="text-sm xl:text-lg">3778 **** **** 1234</span>
        <img src={cardtype} alt="card type" />
      </div>
    </div>
  );
};

export default CreditCard;
