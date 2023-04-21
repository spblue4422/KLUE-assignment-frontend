import React, { useState } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
	width: full;
	z-index: 10;
	border-top: solid 1px rgb(0, 0, 0);
	padding: 2em 4em;
	min-width: 480px;
`;

const Footer: React.FC = () => {
	return <FooterContainer></FooterContainer>;
};

export default Footer;
