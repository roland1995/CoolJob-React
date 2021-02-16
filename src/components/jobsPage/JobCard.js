import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Col } from 'antd';
import { DetailVisibilityContext } from '../../Contexts/DetailVisibilityContext';
import { JobDetailContext } from '../../Contexts/JobDetailContext';
import { OnJobContext } from '../../Contexts/OnJobContext';

export const JobCard = (props) => {
	const { visible } = useContext(DetailVisibilityContext);
	const { setVisible } = useContext(DetailVisibilityContext);
	const { setDetail } = useContext(JobDetailContext);
	const [onJob] = useContext(OnJobContext);
	const { Meta } = Card;

	const StyledImage = styled.img`
		margin-top: 1px;
		width: 12em;
		height: 10em;
		display: block;
		margin-left: auto;
		margin-right: auto;
	`;

	return (
		<Col style={{ padding: '15px' }} span={6}>
			<Link
				onClick={() => (
					visible === true ? setVisible(false) : setVisible(true), setDetail(props)
				)}
				to={onJob === true ? '/jobs/detail/' + props.id : '/favorite/detail/' + props.id}
			>
				<Card
					headStyle={{ textAlign: 'center' }}
					hoverable
					style={{ width: 280, height: 300 }}
					cover={<StyledImage alt='example' src={props.company_logo} />}
					title={props.location}
				>
					<Meta
						style={{ textAlign: 'center' }}
						title={props.title}
						description={props.type}
					/>
				</Card>
			</Link>
		</Col>
	);
};

export default JobCard;
