import { FC } from 'react';

const TransferForm: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-secondary-blue">Write Amount</span>
      <form className="flex items-center" action="">
        <input
          className="bg-primary-bg rounded-3xl py-3 px-5 -mr-8"
          type="number"
          defaultValue={0}
        />
        <button
          className=" text-white font-medium text-center bg-primary-blue rounded-3xl py-3 px-5"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default TransferForm;
