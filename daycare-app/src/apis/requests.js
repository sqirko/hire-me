import queryParams from '../utils/queryParams';

// In this assignment I am using some predefined variables
const TOKEN = '234ffdb8-0889-4be3-b096-97ab1679752c';
const GROUP_ID = '11fc220c-ebba-4e55-9346-cd1eed714620';
const INSTITUTION_ID = 'fb6c8114-387e-4051-8cf7-4e388a77b673';
const PICKUP_TIME = '23:59';

const getChildren = () => {
	const params = {
		accessToken: TOKEN,
		groupId: GROUP_ID,
		institutionId: INSTITUTION_ID
	};
	return fetch(`https://tryfamly.co/api/daycare/tablet/group?${queryParams(params)}`);
}

const checkIn = (childId) => {
	const params = {
		accessToken: TOKEN,
		pickupTime: PICKUP_TIME
	};
	return fetch(`https://tryfamly.co/api/v2/children/${childId}/checkins?${queryParams(params)}`, {
		method: 'POST'
	});
}

const checkOut = childId => {
	const params = {
		accessToken: TOKEN
	};
	return fetch(`https://tryfamly.co/api/v2/children/${childId}/checkout?${queryParams(params)}`, {
		method: 'POST'
	});
}

export { getChildren, checkIn, checkOut };