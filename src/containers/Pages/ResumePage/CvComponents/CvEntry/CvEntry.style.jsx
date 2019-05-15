import styled from 'styled-components';

const DefaultContainer = styled.div``;

const CvEntryContainer = styled.div``;
const CvEntryDateContainer = styled.div`
  text-transform: capitalize;
`;
const CvEntryContentContainer = styled.div``;
const CvEntryDescriptionContainer = styled.div``;
const CvEntryImageContainer = styled.div`
  text-align: right;
`;

const styles = () => ({
  cvImage: { height: 'auto', width: '5em' }
});

export { styles, CvEntryContainer, CvEntryDateContainer, CvEntryContentContainer, CvEntryDescriptionContainer, CvEntryImageContainer };
export default DefaultContainer;
