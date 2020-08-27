import React from 'react';

const Quote = ({content}:any) => {
  console.log('Quote', content)
  return(
    <div dangerouslySetInnerHTML={{__html:content.primary.quote.html}}/>
  )

}
export default Quote