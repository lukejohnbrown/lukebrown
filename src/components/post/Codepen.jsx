
import React from 'react';
import CodepenEmbed from 'react-codepen-embed';

const Codepen = ({ hash, defaultTab, height }) => <CodepenEmbed user="lukejohnbrown" hash={hash} preview={false} themeId="38108" height={height} defaultTab={defaultTab} />;

export default Codepen;
