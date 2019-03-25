import React from 'react';
import PropTypes from 'prop-types';
import { groupBy } from '../../utils';
import styled from 'styled-components';

import currentTheme from '../../themes/current';
import Currency from '../Currency/Currency';

const propTypes = {
  className: PropTypes.string,
  currency: PropTypes.string.isRequired,
  taxes: PropTypes.arrayOf(
    PropTypes.shape({ categories: PropTypes.arrayOf(PropTypes.string), amount: PropTypes.number })
  )
};

const defaultProps = {};

function TaxesRegions({regions, currency}){
  if (regions == undefined){
    return false;
  }else{
  return(
      Object.keys(regions).map((name) => (
        <tr>
          <td>{name}</td>
          <td style={{ textAlign: 'right' }}><Currency currency={currency} value={regions[name]} /></td>
        </tr>
      ))
    );
  }
}

function TaxesTable({ taxes, className, currency }) {
  if (taxes === undefined) {
    return null;
  }
  
  const groupedTaxes = groupBy(taxes, (tax) => tax.categories[1]);
  const groupedTaxesRowSpan = {}
  Object.keys(groupedTaxes).map((category) => {
    groupedTaxesRowSpan[category] = groupedTaxes[category].length;
    groupedTaxes[category].map((tax) =>{
      if (tax['regions']){
        groupedTaxesRowSpan[category] += Object.keys(tax['regions']).length;
      }
    })
  }); 

  return (
    <table className={className}>
      <tbody>
        {Object.keys(groupedTaxes).map((category) =>
          groupedTaxes[category].map((tax, index) => (
            <React.Fragment>
              <tr key={tax.categories}>
                {index === 0 && <th rowSpan={groupedTaxesRowSpan[category]}>{category}</th>}
                <td>
                  {`${tax.categories[2]} ${tax.categories[3] || ''}`}
                </td>
                <td style={{ textAlign: 'right' }}>
                  <Currency currency={currency} value={tax.amount} />
                </td>
              </tr>
              <TaxesRegions currency={currency} regions={tax['regions']}></TaxesRegions>
            </React.Fragment>
          ))
        )}
      </tbody>
    </table>
  );
}

TaxesTable.propTypes = propTypes;
TaxesTable.defaultProps = defaultProps;

const StyledTaxesTable = styled(TaxesTable)`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: 1px solid ${(props) => props.theme.colors.gray};
    text-align: center;
    padding: 8px;
    width: 33.33333%;
  }

  th {
    font-weight: 700;
    color: white;
    background-color: ${(props) => props.theme.colors.secondary.blue};
    text-transform: uppercase;
  }
`;

StyledTaxesTable.defaultProps = { theme: currentTheme };

export default StyledTaxesTable;
