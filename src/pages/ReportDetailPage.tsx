import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';

const ReportContainer = styled.div``;

const LectureEvalContainer = styled.div``;

const ReportDetailPage: React.FC = () => {
	const { reportId } = useParams();
	//report data를 받아와서 넣어야함
	const [data, setData] = useState();

	// useEffect(() => {
	// 	axios({
	// 		method: 'GET',
	// 		url: '',
	// 		withCredentials: false,
	// 	})
	// 		.then((res) => {})
	// 		.catch((err) => {
	// 			alert('에러 발생');
	// 			console.log(err);
	// 		});
	// }, []);

	return (
		<Layout>
			<ReportContainer></ReportContainer>
			<LectureEvalContainer></LectureEvalContainer>
		</Layout>
	);
};

export default ReportDetailPage;
