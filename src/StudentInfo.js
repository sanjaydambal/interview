import React from 'react'

function StudentInfo() {
    const paragraphStyles = {
        color: "Red",
        fontSize: "32px"
      };
     
     const headingStyles = {
        color: "blue",
        fontSize: "48px"
      };
  return (
    <div>
      <h3 style={headingStyles}>This is a heading</h3>
       <p style={paragraphStyles}>This is a paragraph</p>
    </div>
  )
}

export default StudentInfo


