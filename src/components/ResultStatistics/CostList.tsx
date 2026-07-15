import './CostList.css';
import formatCost from './formatCost';
import config from '../../config.json';
import { TotalCosts } from '../../calculatorFunctions/totalCosts/calculateTotalCosts';

interface Props {
  nodeConfigCosts: number;
  additionalCosts: number;
  storageCosts: number;
  totalCosts: TotalCosts;
}

export default function CostList(props: Props) {
  const { nodeConfigCosts, additionalCosts, storageCosts, totalCosts } = props;

  return (
    <>
      <div className="row" id={'nodes-cost'}>
        <h5 className="text">Worker Nodes</h5>
        <h5 className="value">{formatCost(nodeConfigCosts)} CU</h5>
      </div>
      <div className="row" id={'storage-cost'}>
        <h5 className="text">Storage</h5>
        <h5 className="value">{formatCost(storageCosts)} CU</h5>
      </div>
      <div className="row" id={'additional-cost'}>
        <h5 className="text">Additional Services</h5>
        <h5 className="value">{formatCost(additionalCosts)} CU</h5>
      </div>
      <div className="row final-row">
        <h2 className="text">Total Costs</h2>
      </div>
      <div
        className="row final-row final-row-child"
        id={'total-capacity-units'}
      >
        <h5 className="text">- In Capacity Units</h5>
        <h3 className="value">{formatCost(totalCosts.CU)} CU</h3>
      </div>
      <div className="row final-row final-row-child" id={'total-in-currency'}>
        <h5 className="text">- In currency ({config.CurrencyCode})</h5>
        <h3 className="value">
          {formatCost(totalCosts.CC)} {config.CurrencyCode}
        </h3>
      </div>
    </>
  );
}
