import React from 'react';

const BodyText = ({ content }: any) => <div dangerouslySetInnerHTML={{ __html: content.primary.text.html }} />;
export default BodyText;
