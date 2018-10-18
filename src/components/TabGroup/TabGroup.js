import PropTypes from 'prop-types';
import styled from 'styled-components';
import newTheme from '../../themes/new';

export const TabGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.paleGray[300]};
`;

TabGroup.propTypes = {
  theme: PropTypes.object
};

TabGroup.defaultProps = {
  theme: newTheme
};

export default TabGroup;
