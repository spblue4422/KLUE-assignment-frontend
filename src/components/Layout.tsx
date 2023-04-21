import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
	width: full;
	height: 100vh;
	display: flex;
	flex-diretion: column;
`;

const ContentsContainer = styled.div`
	width: full;
	margin: 10vw 20vw;
	min-width: 480px;
`;

const Layout: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
	return (
		<Container>
			<Header></Header>
			<ContentsContainer>{props.children}</ContentsContainer>
		</Container>
	);
};

export default Layout;
