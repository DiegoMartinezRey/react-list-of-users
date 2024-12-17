import {
	StyledContainerCard,
	StyledNameContainer,
	StyledProfileContainer,
	StyledProfileImage
} from './usersList.styles';

const UsersList = props => {
	return (
		<>
			{props.users.map(user => {
				return (
					<StyledContainerCard key={user.userId}>
						<StyledProfileContainer>
							<StyledProfileImage src={user.profileImage} alt={user.name} />
							<StyledNameContainer>
								<span>{user.name}</span>
								<span>@{user.username}</span>
							</StyledNameContainer>
						</StyledProfileContainer>
						{user.active ? <span>Activo</span> : <span>Inactivo</span>}
						<button>Ver detalles</button>
					</StyledContainerCard>
				);
			})}
		</>
	);
};

export default UsersList;
