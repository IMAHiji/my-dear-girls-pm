import React from 'react';
import Image from './slices/Image';
import BodyText from './slices/BodyText';

const SliceParser = ({slices}:any)=>{
  
const parsedSlice = slices.map((slice:any)=>{
  switch(slice.slice_type) {
    case 'text':
      return<BodyText content={slice} key={slice.id}/>
    case 'image':
      return <Image image={slice} key={slice.id}/>
    default:
      return null
  }
})

  return(
  <div>{parsedSlice}</div>
  )

} 
export default SliceParser;