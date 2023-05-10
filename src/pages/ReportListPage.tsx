import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { IReportList } from '../interface/IReportList';
import { Link } from 'react-router-dom';
import { DateToString } from '../utils/DateToString';

const ReportListContainer = styled.ul`
	list-style: none;
	padding-left: 0px;
`;

const ReportListItem = styled.li`
	color: rgb(0, 0, 0);
	border-top: solid 1px;
`;

const ReportListPage: React.FC = () => {
	const { pageNum } = useParams();
	const [data, setData] = useState({} as IReportList);
	const pageVar =
		!pageNum || typeof pageNum === 'undefined'
			? 1
			: parseInt(pageNum) > 0
			? parseInt(pageNum)
			: 1;

	useEffect(() => {
		axios({
			method: 'POST',
			url: 'http://localhost:4000/v2/admin/reports',
			data: {
				page: pageVar - 1,
				count: 15,
			},
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: false,
		})
			.then((res) => {
				setData(res.data);
				// if (Math.ceil(data.totalCount / 15) < pageVar) {
				// 	window.location.replace(`http://localhost:3000/admin/reports/${pageVar}`);
				// }
			})
			.catch((err) => {
				alert('에러 발생');
				console.log(err);
			});
	}, [pageNum, pageVar]);

	return (
		<>
			<ReportListContainer>
				{data.data &&
					data.data.map((dt, idx) => (
						<ReportListItem>
							<Link
								to={`/admin/report/${dt.reportId}`}
								style={{
									color: 'rgb(0, 0, 0)',
									textDecorationLine: 'none',
								}}
							>
								<p>{dt.reportId} / {dt.username} / {dt.category}</p>
								<p>신고 일자 - {DateToString(dt.createdAt)}</p>
								{/* <p>{dt.content.slice(0, 20)}</p> */}
								<p>
									{dt.state} 
									{dt.state === 'RESOLVED'
										? ` - ${DateToString(dt.answeredAt)}`
										: ''}
								</p>
							</Link>
						</ReportListItem>
					))}
			</ReportListContainer>
			{data && (
				<Pagination
					page={pageVar}
					totalCount={data.totalCount}
				></Pagination>
			)}
		</>
	);
};

export default ReportListPage;
