import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { IReportLectureEval } from '../interface/IReportLectureEval';

const ReportContainer = styled.div``;

const LectureEvalContainer = styled.div``;

const ReportDetailPage: React.FC = () => {
	const { reportId } = useParams();
	//report data를 받아와서 넣어야함
	const [data, setData] = useState({} as IReportLectureEval);

	useEffect(() => {
		axios({
			method: 'GET',
			url: `localhost:4000/v2/admin/report/${reportId}`,
			withCredentials: false,
		})
			.then((res) => setData(res.data.data))
			.catch((err) => {
				alert('에러 발생');
				console.log(err);
			});
	}, []);

	return (
		<Layout>
			<ReportContainer>
				<p>{data.username}</p>
				<p>{data.category}</p>
				<p>{data.createdAt.toString()}</p>
				<p>{data.content}</p>
				<p>{data.managerAnswer}</p>
				<p>{data.answeredAt.toString()}</p>
				<p>{data.state}</p>
			</ReportContainer>
			<LectureEvalContainer>
				<p>{data.lectureEval.content}</p>
				<p>{data.lectureEval.state}</p>
				<p>{data.lectureEval.createdAt.toString()}</p>
			</LectureEvalContainer>
		</Layout>
	);
};

export default ReportDetailPage;
