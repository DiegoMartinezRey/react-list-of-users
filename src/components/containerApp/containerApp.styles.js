import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	margin: 10px;
`;

const StyledFiltersContainer = styled.div`
	width: 500px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledActiveContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

export { StyledActiveContainer, StyledContainer, StyledFiltersContainer };
