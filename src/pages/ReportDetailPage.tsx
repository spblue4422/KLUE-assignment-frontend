import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { IReportLectureEval } from '../interface/IReportLectureEval';
import { DateToString } from '../utils/DateToString';

const ReportContainer = styled.div``;

const LectureEvalContainer = styled.div`
	padding: 0px;
	border: 1px solid;
`;

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
				<h1>신고 내역 - {reportId}</h1>
				{data && (
					<>
						<div>
							<h4>신고자 ID</h4>
							<p>{data.username}</p>
						</div>
						<div>
							<h4>신고 카테고리</h4>
							<p>{data.category}</p>
						</div>
						<div>
							<h4>신고 일자</h4>
							<p>{DateToString(data.createdAt)}</p>
						</div>
						<div>
							<h4>신고 내용</h4>
							<p>{data.content}</p>
						</div>
						<div>
							<h4>답변 상태</h4>
							<p>{data.state}</p>
						</div>
						{data.state === 'RESOLVED' ? (
							<>
								<div>
									<h4>답변 내용</h4>
									<p>{data.managerAnswer}</p>
								</div>
								<div>
									<h4>답변 일자</h4>
									<p>{DateToString(data.answeredAt)}</p>
								</div>
							</>
						) : (
							''
						)}
					</>
				)}
			</ReportContainer>
			<LectureEvalContainer>
				{data.lectureEval && (
					<>
						<div>
							<h4>강의 평가 내용</h4>
							<p>{data.lectureEval.content}</p>
						</div>
						<div>
							<h4>강의 평가 등록 일자</h4>
							<p>{DateToString(data.lectureEval.createdAt)}</p>
						</div>
						<div>
							<h4>강의 평가 현재 상태</h4>
							<p>{data.lectureEval.state}</p>
						</div>
					</>
				)}
			</LectureEvalContainer>
		</>
	);
};

export default ReportDetailPage;
