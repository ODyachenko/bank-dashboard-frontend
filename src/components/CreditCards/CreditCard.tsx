import { FC } from 'react';
import chip from '../../assets/img/chip.svg';
import cardtype from '../../assets/img/cardtype.svg';

const CreditCard: FC = () => {
  return (
    <div className=" text-white bg-primary-blue rounded-2xl py-4 px-5 shrink-0">
      <div className="flex items-center justify-between mb-6 xl:mb-8">
        <div>
          <span className="block text-xs">Balance</span>
          <span className="text-base font-semibold">$5.756</span>
        </div>
        <img src={chip} alt="card chip" />
      </div>
      <div className="flex justify-between">
        <div>
          <span className="block text-xs">CARD HOLDER</span>
          <span className="text-base">Eddy Cusuma</span>
        </div>
        <div>
          <span className="block text-xs">VALID THRU</span>
          <span className="text-base">12/22</span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 xl:pt-8">
        <span className="text-sm">3778 **** **** 1234</span>
        <img src={cardtype} alt="card type" />
      </div>
    </div>
  );
};

export default CreditCard;
