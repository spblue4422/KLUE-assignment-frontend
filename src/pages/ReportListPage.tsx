import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { IReport } from '../interface/IReport';
import { useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { IReportList } from '../interface/IReportList';
import { Link } from 'react-router-dom';

const ReportListContainer = styled.ul``;

const ReportListItem = styled.li`
	color: rgb(0, 0, 0);
	border-top: solid 1px;
`;

const ReportListPage: React.FC = () => {
	const { pageNum } = useParams();
	const [data, setData] = useState({} as IReportList);

	useEffect(() => {
		axios({
			method: 'POST',
			url: 'http://localhost:4000/v2/admin/reports',
			data: {
				page: pageNum,
				count: 15,
			},
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: false,
		})
			.then((res) => setData(res.data.data))
			.catch((err) => {
				alert('에러 발생');
				console.log(err);
			});
	}, []);
	//pagingDto - page: 페이지 번호, count: 가져올 개수

	return (
		<Layout>
			<ReportListContainer>
				{data.data.map((dt, idx) => (
					<ReportListItem>
						<Link to={`/admin/report/${dt.reportId}`}>
							<p>{dt.category}</p>
							<p>{dt.createdAt.toString()}</p>
							<p>{dt.username}</p>
							<p>{dt.content}</p>
							<p>{dt.state}</p>
							<p>{dt.answeredAt.toString()}</p>
						</Link>
					</ReportListItem>
				))}
			</ReportListContainer>
			<Pagination
				page={pageNum} // currentPage
				totalCount={data.totalCount}
			></Pagination>
		</Layout>
	);
};

export default ReportListPage;
