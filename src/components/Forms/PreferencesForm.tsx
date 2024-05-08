import { FC } from 'react';
import Btn from '../../UI/Btn/Btn';
import SelectField from '../../UI/SelectField.tsx/SelectField';
import SwitchBtn from '../../UI/SwitchBtn/SwitchBtn';

const currenciesList: string[] = ['UAH', 'USD', 'CAD', 'Funt'];
const timeZonesList: string[] = [
  '(GMT-12) International Date Line West',
  '(GMT-13) International Date Line West',
  '(GMT-14) International Date Line West',
];

const PreferencesForm: FC = () => {
  return (
    <form>
      <fieldset className="mb-4">
        <SelectField
          className="mb-4"
          label="Currency"
          options={currenciesList}
        />
        <SelectField label="Time Zone" options={timeZonesList} />
      </fieldset>
      <fieldset className="mb-4 flex flex-col gap-4">
        <h2 className="block text-base font-medium">Notification</h2>
        <SwitchBtn label="I send or receive digita currency" />
        <SwitchBtn label="I receive merchant order" />
        <SwitchBtn label="There are recommendation for my account" />
      </fieldset>
      <Btn value="Save" className=" ml-auto" />
    </form>
  );
};

export default PreferencesForm;
