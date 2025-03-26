import React, { useEffect, useState } from 'react';
import { Form } from '@ui5/webcomponents-react';
import VMsizeSelect from './UserInputs/nodes/VMsizeSelect';
import MachineTypeSelect from './UserInputs/nodes/MachineTypeSelect';
import MinAutoscalerInputField from './UserInputs/nodes/MinAutoscalerInputField';
import './CostWizard.css';
import {
  MachineSetup,
  MachineType,
  VMSize,
} from '../../state/nodes/machineSetupState';

interface Props {
  machine: MachineSetup;
  updateMachine: (updatedMachine: MachineSetup) => void;
  workerNode: boolean;
}

export default function MachineSetupForm({
  machine,
  updateMachine,
  workerNode,
}: Props) {
  const [machineType, setMachineType] = useState<MachineType>(
    machine.machineType,
  );
  const [VMSize, setVMSize] = useState<VMSize>(machine.VMSize);
  const [autoScalerMin, setAutoScalerMin] = useState<number>(
    machine.minAutoscaler,
  );

  useEffect(() => {
    setMachineType(machine.machineType);
    setVMSize(machine.VMSize);
    setAutoScalerMin(machine.minAutoscaler);
  }, [machine]);

  useEffect(() => {
    updateMachine({
      ...machine,
      machineType,
      VMSize,
      minAutoscaler: autoScalerMin,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [machineType, VMSize, autoScalerMin]);

  return (
    <Form>
      <MachineTypeSelect
        machineType={machineType}
        setMachineType={setMachineType}
        workerNode={workerNode}
      />
      <VMsizeSelect
        VMSize={VMSize}
        setVMSize={setVMSize}
        VMSizeOptions={machineType.VMSizeOptions}
      />
      <MinAutoscalerInputField
        autoScalerMin={autoScalerMin}
        setAutoScalerMin={setAutoScalerMin}
      />
    </Form>
  );
}
