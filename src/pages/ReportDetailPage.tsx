import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { IReportLectureEval } from '../interface/IReportLectureEval';
import { DateToString } from '../utils/DateToString';

const ReportContainer = styled.div``;

const LectureEvalContainer = styled.div``;

const ReportDetailPage: React.FC = () => {
	const { reportId } = useParams();
	const [data, setData] = useState({} as IReportLectureEval);

	useEffect(() => {
		axios({
			method: 'GET',
			url: `http://localhost:4000/v2/admin/report/${reportId}`,
			withCredentials: false,
		})
			.then(async (res) => {
				await setData(res.data);
			})
			.catch((err) => {
				alert('에러 발생');
				console.log(err);
			});
	}, [reportId]);

	return (
		<>
			<ReportContainer>
				{data && (
					<>
						<p>{data.username}</p>
						<p>{data.category}</p>
						<p>{DateToString(data.createdAt)}</p>
						<p>{data.content}</p>
						<p>{data.managerAnswer}</p>
						<p>{DateToString(data.answeredAt)}</p>
						<p>{data.state}</p>
					</>
				)}
			</ReportContainer>
			<LectureEvalContainer>
				{data.lectureEval && (
					<>
						<p>{data.lectureEval.content}</p>
						<p>{data.lectureEval.state}</p>
						<p>{DateToString(data.lectureEval.createdAt)}</p>
					</>
				)}
			</LectureEvalContainer>
		</>
	);
};

export default ReportDetailPage;
