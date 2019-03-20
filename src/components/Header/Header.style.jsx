import styled from 'styled-components';

const DefaultContainer = styled.div`
  align-items: 'right';
`;
const HeaderContainer = styled.div``;

const styles = () => ({
  appBar: {
    top: 0,
    background: 'none',
    boxShadow: 'none'
  },
  toolbar: {
    justifyContent: 'flex-end'
  }
});

export { styles, HeaderContainer };
export default DefaultContainer;
