import GiBQuantityInputField from '../UserInputs/storage/GiBQuantityInputField';
import { Title, WizardStep } from '@ui5/webcomponents-react';
import PreviousStepButton from '../Buttons/PreviousStepButton';
import NextStepButton from '../Buttons/NextStepButton';
import NFSGiBQuantityInputField from '../UserInputs/storage/NFSGiBQuantityInputField';
import SnapshotGiBQuantityInputField from '../UserInputs/storage/SnapshotGiBQuantityInputField';
import InfoField from '../common/InfoField';
import config from '../../../config.json';

export default function StorageStep() {
  const storageInfo = (
    <div>
      By default, the first{' '}
      <strong>
        {config.Storage.Step * config.Storage.FreeStorageBlocks} GiB
      </strong>{' '}
      of standard storage is included at no additional cost, covering the
      cluster's operational data. Storage beyond that amount is billed in blocks
      of <strong>{config.Storage.Step} GiB</strong>. NFS storage is billed at{' '}
      {config.NFSStorage.multiplier} times the standard storage price. Snapshot
      storage is the space used by volume snapshots and is billed at the
      standard price, without a free block.
    </div>
  );

  return (
    <WizardStep disabled titleText="Storage">
      <Title wrappingType="Normal" level="H2" size="H2">
        3. Add storage for the cluster
      </Title>
      <InfoField info={storageInfo} />
      <div className="StepContent">
        <GiBQuantityInputField />
        <NFSGiBQuantityInputField />
        <SnapshotGiBQuantityInputField />
      </div>

      <div className="ButtonContainer">
        <PreviousStepButton />
        <NextStepButton />
      </div>
    </WizardStep>
  );
}
