import React, { PropsWithChildren, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PaginationProps extends PropsWithChildren {
	page: number; // currentPage
	totalCount: number;
}

interface PaginationButtonProps extends PropsWithChildren {
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

	const totalPage =
		totalCount % 15 !== 0 ? totalCount / 15 + 1 : totalCount / 15;
	const startNum = (page / 10) * 10;
	const paginationCount =
		totalPage - startNum >= 10 ? 10 : totalPage - startNum;

	return (
		<PaginationContainer>
			{startNum === 0 ? (
				''
			) : (
				<PaginationLeftArrow to={`/admin/reports/${startNum - 10}`}>
					{'<'}
				</PaginationLeftArrow>
			)}
			{paginationCount > 0
				? Array(paginationCount)
						.fill(0)
						.map((dt, idx) => (
							<PaginationButton
								isCurrent={page === startNum + idx}
								to={`/admin/reports/${startNum + idx}`}
							>
								{startNum + idx}
							</PaginationButton>
						))
				: ''}
			{totalPage - startNum <= 10 ? (
				''
			) : (
				<PaginationRightArrow to={`/admin/reports/${startNum + 10}`}>
					{'>'}
				</PaginationRightArrow>
			)}
		</PaginationContainer>
	);
};

export default Pagination;
