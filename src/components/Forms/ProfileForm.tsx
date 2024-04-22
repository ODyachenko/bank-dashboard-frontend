import React, { FC } from 'react';
import avatar from '../../assets/img/avatar.png';
import InputField from '../../UI/InputField/InputField';
import Btn from '../../UI/Btn/Btn';
import SelectField from '../../UI/SelectField.tsx/SelectField';

const countriesList: string[] = ['Ukraine', 'USA', 'Canada', 'UK'];

const ProfileForm: FC = () => {
  return (
    <form className="lg:flex lg:items-start lg:gap-10">
      <img src={avatar} alt="" className="mx-auto mb-6 lg:mx-0 lg:mb-0" />
      <fieldset className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        <InputField type="text" label="Your Name" placeholder="user name" />
        <InputField type="text" label="Username" placeholder="username" />
        <InputField type="email" label="Email" placeholder="test@gmail.com" />
        <InputField
          type="date"
          label="Date of Birth"
          placeholder="25 Jan 1990"
        />
        <InputField
          type="text"
          label="Present Address"
          placeholder="San Jose, California"
        />
        <InputField type="text" label="City" placeholder="San Jose" />
        <InputField type="number" label="Postal Code" placeholder="45962" />
        <SelectField label="Country" options={countriesList} />
        <Btn className="m" value="Save" />
      </fieldset>
    </form>
  );
};

export default ProfileForm;
