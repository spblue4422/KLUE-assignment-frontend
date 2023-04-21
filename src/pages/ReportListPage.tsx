import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../components/Layout';

const ReportListContainer = styled.ul``;

const ReportListItem = styled.li``;

const ReportListPage: React.FC = () => {
	const [data, setData] = useState(new Array<any>());

	// useEffect(() => {
	// 	axios({
	// 		method: 'POST',
	// 		url: '',
	// 		withCredentials: false,
	// 	})
	// 		.then((res) => setData(res.data.data))
	// 		.catch((err) => {
	// 			alert('에러 발생');
	// 			console.log(err);
	// 		});
	// }, []);
	//pagingDto - page: 페이지 번호, count: 가져올 개수

	return (
		<Layout>
			<ReportListContainer>
				{data.map((dt, idx) => (
					<ReportListItem></ReportListItem>
				))}
			</ReportListContainer>
		</Layout>
	);
};

export default ReportListPage;
