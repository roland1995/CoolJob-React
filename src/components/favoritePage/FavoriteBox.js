import React, { useContext } from 'react';
import FavoriteList from './FavoriteList';
import styled from 'styled-components';
import { BackTop } from 'antd';
import DetailBox from '../detailsPage/DetailBox';
import { DetailVisibilityContext } from '../../Contexts/DetailVisibilityContext';

export const FavoriteBox = () => {
	const [value] = useContext(DetailVisibilityContext);

	const StyledDiv = styled.div`
		width: 100%;
		float: right;
	`;
	const DetailDiv = styled.div`
		display: ${value ? 'block' : 'none'};
	`;
	const FavoriteDiv = styled.div`
		padding: 15px;
		background: #ececec;

		display: ${value ? 'none' : 'block'};
	`;

	const MainDiv = styled.div`
		background-color: black;
	`;

	const Div = styled.div`
		position: fixed;
	`;

	return (
		<MainDiv>
			<StyledDiv>
				<DetailDiv>
					<DetailBox />
				</DetailDiv>
				<FavoriteDiv>
					<FavoriteList />
				</FavoriteDiv>
			</StyledDiv>
			<BackTop />
		</MainDiv>
	);
};
export default FavoriteBox;
