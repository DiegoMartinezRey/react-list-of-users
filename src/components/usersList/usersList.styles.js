import styled from 'styled-components';

const StyledContainerCard = styled.div`
	width: 500px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	border-radius: 0.75rem;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
`;

const StyledProfileContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 20px;
`;

const StyledProfileImage = styled.img`
	width: 50px;
	border-radius: 50%;
`;

const StyledNameContainer = styled.div`
	width: 200px;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;

export {
	StyledContainerCard,
	StyledNameContainer,
	StyledProfileContainer,
	StyledProfileImage
};
