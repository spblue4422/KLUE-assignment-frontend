import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { IReport } from '../interface/IReport';
import { useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { IReportList } from '../interface/IReportList';
import { Link } from 'react-router-dom';
import { DateToString } from '../utils/DateToString';

const ReportListContainer = styled.ul``;

const ReportListItem = styled.li`
	color: rgb(0, 0, 0);
	border-top: solid 1px;
`;

const ReportListPage: React.FC = () => {
	const { pageNum } = useParams();
	const [data, setData] = useState({} as IReportList);
	const pageVar =
		!pageNum || typeof pageNum === 'undefined' ? 1 : parseInt(pageNum);

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
			.then((res) => setData(res.data))
			.catch((err) => {
				alert('에러 발생');
				console.log(err);
			});
	}, [pageNum]);

	return (
		<>
			<ReportListContainer>
				{data.data &&
					data.data.map((dt, idx) => (
						<ReportListItem>
							<Link to={`/admin/report/${dt.reportId}`}>
								<p>{dt.category}</p>
								<p>{DateToString(dt.createdAt)}</p>
								<p>{dt.username}</p>
								<p>{dt.content}</p>
								<p>{dt.state}</p>
								<p>{DateToString(dt.answeredAt)}</p>
							</Link>
						</ReportListItem>
					))}
			</ReportListContainer>
			{data && (
				<Pagination
					page={pageVar} // currentPage
					totalCount={data.totalCount}
				></Pagination>
			)}
		</>
	);
};

export default ReportListPage;
