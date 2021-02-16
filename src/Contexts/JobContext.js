import React, { createContext } from 'react';
import { GetApiData } from '../hook/GetApiData';

export const JobContext = createContext();

export const JobProvider = (props) => {
	const [fetchData] = GetApiData('https://localhost:44318/api/Jobs');

	const jobs = fetchData;
	console.log(jobs);

	return <JobContext.Provider value={{ jobs }}>{props.children}</JobContext.Provider>;
};

export default JobProvider;
