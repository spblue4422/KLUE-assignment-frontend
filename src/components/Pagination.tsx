import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PaginationProps {
	page: number; // currentPage
	totalCount: number;
}

interface PaginationButtonProps {
	isCurrent: boolean;
}

const PaginationContainer = styled.div`
	width: full;
	min-width: 480px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const PaginationButton = styled(Link)<PaginationButtonProps>`
	width: 3em;
	height: 3em;
	border-left: solid 1px;
	align-itmes: center;
	background-color: ${(props) =>
		props.isCurrent ? 'rgb(243, 156, 18)' : 'rgb(255, 255, 255)'};
	color: ${(props) =>
		props.isCurrent ? 'rgb(255, 255, 255)' : 'rgb(243, 156, 18)'};
	hover: {
		background-color: ${(props) =>
			props.isCurrent ? 'rgb(203, 138, 26)' : 'rgb(220, 220, 220)'};
		color: ${(props) =>
			props.isCurrent ? 'rgb(220, 220, 220)' : 'rgb(203, 138, 26)'};
	}
`;

const PaginationLeftArrow = styled(Link)``;
const PaginationRightArrow = styled(Link)``;

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
	const { page = 0, totalCount = 0 } = props;

	// 아래 계산부분 좀 축소
	// 변수명 지을 때 의미가 잘 나타나게 짓자
	const totalPage = Math.ceil(totalCount / 15);

	const startNum = Math.floor((page - 1) / 10) * 10;
	const paginationCount =
		totalPage - startNum >= 10 ? 10 : totalPage - startNum;

	return (
		<PaginationContainer>
			{startNum === 0 && (
				<PaginationLeftArrow to={`/admin/reports/${startNum}`}>
					{'<'}
				</PaginationLeftArrow>
			)}
			{paginationCount > 0 &&
				Array(paginationCount)
					.fill(undefined)
					.map((dt, idx) => (
						<PaginationButton
							// startNum + idx + 1을 변수로 정해두면 좋지 않을까
							isCurrent={page === startNum + idx + 1}
							to={`/admin/reports/${startNum + idx + 1}`}
						>
							{startNum + idx + 1}
						</PaginationButton>
					))}
			{totalPage - startNum <= 10 && (
				<PaginationRightArrow to={`/admin/reports/${startNum + 11}`}>
					{'>'}
				</PaginationRightArrow>
			)}
		</PaginationContainer>
	);
};

export default Pagination;
