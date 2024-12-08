import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
	width: full;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const ContentsContainer = styled.div`
	width: full;
	margin: 2vw 20vw;
	min-width: 480px;
`;

const Layout: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
	return (
		<Container>
			<Header />
			<ContentsContainer>{props.children}</ContentsContainer>
			<Footer />
		</Container>
	);
};

export default Layout;
