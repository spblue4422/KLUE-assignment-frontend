import React, { useState } from 'react';
import styled from 'styled-components';

const KlueTitle = styled.link``;
const UserName = styled.link``;

const HeaderContainer = styled.div`
	width: full;
	z-index: 10;
	border-bottom: solid 1px rgb(243, 156, 18);
	padding: 2em 4em;
	min-width: 480px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<KlueTitle>KLUE</KlueTitle>
			<UserName>spblue4422</UserName>
		</HeaderContainer>
	);
};

export default Header;
