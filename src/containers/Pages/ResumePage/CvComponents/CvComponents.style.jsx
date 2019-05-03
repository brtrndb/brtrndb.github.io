import styled from 'styled-components';

const DefaultContainer = styled.div``;
const CvSectionContainer = styled.div``;

const CvEntryContainer = styled.div``;
const CvEntryDateContainer = styled.div`
  text-transform: capitalize;
`;
const CvEntryContentContainer = styled.div``;
const CvEntryImageContainer = styled.div``;

const CvSkillContainer = styled.div``;
const CvSkillTitleContainer = styled.div``;
const CvSkillContentContainer = styled.div``;

const styles = () => ({
  cvImage: { height: 'auto', width: '5em' }
});

export { styles, CvSectionContainer, CvEntryContainer, CvEntryDateContainer, CvEntryContentContainer, CvEntryImageContainer, CvSkillContainer, CvSkillTitleContainer, CvSkillContentContainer };
export default DefaultContainer;
