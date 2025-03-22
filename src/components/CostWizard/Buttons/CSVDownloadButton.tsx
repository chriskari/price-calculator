import React from 'react';
import { Button, Icon } from '@ui5/webcomponents-react';
import { useRecoilValue } from 'recoil';
import { GBQuantityState } from '../../../state/storage/GBQuantityState';
import { timeConsumptionStorageState } from '../../../state/storage/timeConsumptionState';
import {
  additionalMachineSetupState,
  baseMachineSetupState,
  MachineSetup,
} from '../../../state/nodes/machineSetupState';
import './DownloadButton.css';
import '@ui5/webcomponents-icons/dist/download.js';
import exportCSV from '../Functions/exportCSV';
import { premiumGBQuantityState } from '../../../state/storage/premiumGBQuantityState';
import {
  RedisSize,
  redisState,
} from '../../../state/additionalConfig/redisState';
import { useCostCalculator } from '../../../context/CostCalculatorContext';

export default function CSVDownloadButton() {
  const baseMachineSetup = useRecoilValue<MachineSetup>(baseMachineSetupState);
  const additionalMachineSetup = useRecoilValue<MachineSetup[]>(
    additionalMachineSetupState,
  );
  const storageQuantity: number = useRecoilValue<number>(GBQuantityState);
  const premiumStorageQuantity: number = useRecoilValue<number>(
    premiumGBQuantityState,
  );
  const storageTime: number = useRecoilValue<number>(
    timeConsumptionStorageState,
  );
  const redisSize = useRecoilValue<RedisSize>(redisState);
  const { nodeConfigCosts, storageCosts, additionalCosts, totalCosts } =
    useCostCalculator();

  return (
    <Button
      className="DownloadButton"
      design="Emphasized"
      onClick={() =>
        exportCSV({
          baseCosts: nodeConfigCosts,
          machineSetup: [baseMachineSetup, ...additionalMachineSetup],
          storageCosts,
          storageQuantity,
          storageTime,
          additionalCosts,
          totalCosts: totalCosts.CU,
          premiumStorageQuantity,
          redisSize,
        })
      }
    >
      CSV File
      <Icon id="download-icon" design="Contrast" name="download" />
    </Button>
  );
}
