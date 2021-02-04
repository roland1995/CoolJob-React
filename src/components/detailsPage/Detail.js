import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobDetailContext } from '../../Contexts/JobDetailContext';
import { FavoriteJobContext } from '../../Contexts/FavoriteJobContext';
import 'antd/dist/antd.css';
import { Layout, Image, Button } from 'antd';
import { DetailVisibilityContext } from '../../Contexts/DetailVisibilityContext';
import { OnJobContext } from '../../Contexts/OnJobContext';

export const Detail = () => {
	const [favoriteJobs, setFavoriteJobs] = useContext(FavoriteJobContext);
	const [onJob, setOnJob] = useContext(OnJobContext);
	const [visibility, setVisibility] = useContext(DetailVisibilityContext);
	const { Header, Footer, Content } = Layout;
	const [detail] = useContext(JobDetailContext);

	const StyleImage = {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '8px',
		width: '500px',
	};

	const DeleteJobFromFavoriteList = () => {
		setFavoriteJobs([...favoriteJobs.filter((job) => job.id !== detail.id)]);
	};

	const AddJobToFavoriteList = () => {
		setFavoriteJobs([...favoriteJobs.filter((job) => job.id !== detail.id), detail]);
	};

	console.log(favoriteJobs);
	return (
		<Layout>
			<Header style={{ color: '#F5FFFA', backgroundColor: '#000080' }}>
				<Link to={onJob === true ? '/jobs' : '/favorite'}>
					<Button
						style={{
							color: 'white',
							backgroundColor: '#2F4F4F',
							marginTop: '15px',
							float: 'right',
						}}
						onClick={() =>
							visibility === true ? setVisibility(false) : setVisibility(true)
						}
					>
						Back to jobs
					</Button>
				</Link>
				<h1 style={{ color: '#F5FFFA' }}>{detail.title}</h1>
			</Header>
			<Content>
				<div style={{ paddingRight: '400px', paddingLeft: '400px' }}>
					<Image style={StyleImage} src={detail.company_logo} />
				</div>
				<div style={{ margin: '20px' }}>
					<h2>Company name: {detail.company}</h2>
					<h3>Job title: {detail.type}</h3>
					<h3>Job location: {detail.location}</h3>
					<h4>
						company page: <a href={detail.company_url}>{detail.company_url}</a>
					</h4>
					<p dangerouslySetInnerHTML={{ __html: detail.apply }} />
					<h4>descritpiton:</h4>
					<p dangerouslySetInnerHTML={{ __html: detail.description }} />
				</div>
			</Content>
			<Footer>
				Added at : {detail.created_at}{' '}
				<Button
					style={{
						color: 'white',
						backgroundColor: '#2F4F4F',
						marginRight: '140px',
						float: 'right',
					}}
					onClick={() =>
						onJob === true ? AddJobToFavoriteList() : DeleteJobFromFavoriteList()
					}
				>
					{onJob === true ? 'Add to favorites' : 'Delete from favorites'}
				</Button>
			</Footer>
		</Layout>
	);
};

export default Detail;
