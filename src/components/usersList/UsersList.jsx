import {
	StyledActive,
	StyledContainerCard,
	StyledInactive,
	StyledName,
	StyledNameContainer,
	StyledProfileContainer,
	StyledProfileImage,
	StyledUsername
} from './usersList.styles';

const UsersList = props => {
	return (
		<>
			{props.users.length > 0 ? (
				props.users.map(user => {
					return (
						<StyledContainerCard key={user.userId}>
							<StyledProfileContainer>
								<StyledProfileImage src={user.profileImage} alt={user.name} />
								<StyledNameContainer>
									<StyledName>{user.name}</StyledName>
									<StyledUsername>@{user.username}</StyledUsername>
								</StyledNameContainer>
							</StyledProfileContainer>
							{user.active ? (
								<StyledActive>Activo</StyledActive>
							) : (
								<StyledInactive>Inactivo</StyledInactive>
							)}
							<button>Ver detalles</button>
						</StyledContainerCard>
					);
				})
			) : (
				<p>No se encuentran usuarios</p>
			)}
		</>
	);
};

export default UsersList;
