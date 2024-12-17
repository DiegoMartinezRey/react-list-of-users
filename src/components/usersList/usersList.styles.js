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

const StyledName = styled.h2`
	font-size: 1rem;
	font-weight: bold;
`;
const StyledUsername = styled.span`
	font-size: 0.75rem;
`;

const StyledActive = styled.span`
	color: green;
`;
const StyledInactive = styled.span`
	color: red;
`;

export {
	StyledActive,
	StyledContainerCard,
	StyledInactive,
	StyledName,
	StyledNameContainer,
	StyledProfileContainer,
	StyledProfileImage,
	StyledUsername
};
