import React from 'react'
interface Skills{
    tools:string[]
}
const Tools = ({tools}:Skills) => {
  return (
    <div className="flex gap-x-8 sm:justify-center break-words  flex-wrap">
        <button className="h-12 w-28 bg-green-300 border-r-rounded" style={{borderTopRightRadius:'70px', cursor:'default'}}>Made with</button>
         {tools.map((tool:string, index:number) => (
          <button key={index} className="py-4">
            {tool}
          </button>
         ))}
         
      </div> 
  )
}

export default Tools