import { useState } from 'react';
import { USERS } from '../../constants/users';
import UsersList from '../usersList/UsersList';
import {
	StyledActiveContainer,
	StyledContainer,
	StyledFiltersContainer
} from './containerApp.styles';

const ContainerApp = () => {
	const [users, setUsers] = useState(USERS);
	const [filter, setFilter] = useState('');
	const [active, setActive] = useState(false);
	const [order, setOrder] = useState('byDefault');

	const getFilterName = e => {
		e.preventDefault();
		setFilter(e.target.value);
	};

	const getFilterActive = e => {
		setActive(e.target.checked);
	};

	const getOrder = e => {
		setOrder(e.target.value);
	};

	const filteredUsers = users.filter(user => {
		const filterName = user.name.toLowerCase().includes(filter.toLowerCase());
		const filterActive = user.active;
		if (active) {
			return filterName && filterActive;
		} else {
			return filterName;
		}
	});

	const orderUsers = filteredUsers.sort((a, b) => {
		if (order === 'byName') {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		} else {
			return;
		}
	});

	return (
		<StyledContainer>
			<h1>Listado de usuarios</h1>
			<StyledFiltersContainer>
				<input type='text' onChange={getFilterName} />
				<StyledActiveContainer>
					<span>Sólo activos</span>
					<input type='checkbox' checked={active} onChange={getFilterActive} />
				</StyledActiveContainer>
				<select value={order} onChange={getOrder}>
					<option value='byDefault'>Por Defecto</option>
					<option value='byName'>Por Nombre</option>
				</select>
			</StyledFiltersContainer>
			<UsersList users={orderUsers} />
		</StyledContainer>
	);
};

export default ContainerApp;
