import React from 'react';

const BodyText = ({content}:any) => {
  
  console.log('Body Text Html', content.primary.text.html)
  return(
    <div dangerouslySetInnerHTML={{__html:content.primary.text.html}}/>
  )

}
export default BodyText