import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpacerWrapper = styled.span`
    display: block;
    height: ${({ space, theme }) => theme.space[space]};
`;


const Spacer = ({ space = 6 }) => <SpacerWrapper space={space} />;

export default Spacer;
