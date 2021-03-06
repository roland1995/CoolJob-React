import React, { useContext } from 'react';
import { FilteredJobContext } from '../../Contexts/FilteredJobsContext';
import JobCard from './JobCard';
import { Row } from 'antd';

export const JobsList = () => {
	const { filteredJobs } = useContext(FilteredJobContext);

	return (
		<Row gutter={16}>
			{filteredJobs.map((job) => (
				<JobCard
					key={job.id}
					id={job.id}
					type={job.type}
					created_at={job.created_at}
					title={job.title}
					location={job.location}
					company_logo={job.company_logo}
					company={job.company}
					apply={job.how_to_apply}
					company_url={job.company_url}
					description={job.description}
				/>
			))}
		</Row>
	);
};

export default JobsList;
