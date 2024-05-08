import { FC, useState } from 'react';
import { Switch } from '@headlessui/react';

type SwitchBtnProps = {
  label: string;
};

const SwitchBtn: FC<SwitchBtnProps> = ({ label }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group as="div" className="flex items-center gap-3 cursor-pointer">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        {/* <span className="sr-only">Enable notifications</span> */}
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <Switch.Label className="text-sm leading-6 text-gray-600">
        {label}
      </Switch.Label>
    </Switch.Group>
  );
};

export default SwitchBtn;
