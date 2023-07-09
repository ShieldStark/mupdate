import React, { useState } from 'react';
import './HoverSlider.css'; // We'll create this CSS file in the next step

const HoverSlider = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'];

  const handleOptionChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="hover-slider">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleOptionChange(index)}
          style={{ zIndex: options.length - index }} // Set higher z-index for the active option
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default HoverSlider;




// import React, { useState } from 'react';
// import './HoverSlider.css'; // We'll create this CSS file in the next step

// const HoverSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'];

//   const handleOptionChange = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="hover-slider">
//       {options.map((option, index) => (
//         <div
//           key={index}
//           className={`option ${index === activeIndex ? 'active' : ''}`}
//           onClick={() => handleOptionChange(index)}
//         >
//           {option}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HoverSlider;





// // import React, { useState } from 'react';
// // import './HoverSlider.css'; // We'll create this CSS file in the next step

// // const HoverSlider = () => {
// //   const [activeIndex, setActiveIndex] = useState(null);

// //   const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'];

// //   const handleOptionChange = (index) => {
// //     setActiveIndex(index);
// //   };

// //   return (
// //     <div className="hover-slider-container">
// //       <div className="hover-slider">
// //         {options.map((option, index) => (
// //           <div
// //             key={index}
// //             className={`option ${index === activeIndex ? 'active' : ''}`}
// //             onClick={() => handleOptionChange(index)}
// //           >
// //             {option}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HoverSlider;





// // // import React, { useState } from 'react';
// // // import './HoverSlider.css'; // We'll create this CSS file in the next step

// // // const HoverSlider = () => {
// // //   const [activeIndex, setActiveIndex] = useState(null);

// // //   const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

// // //   const handleOptionChange = (index) => {
// // //     setActiveIndex(index);
// // //   };

// // //   return (
// // //     <div className="hover-slider">
// // //       {options.map((option, index) => (
// // //         <div
// // //           key={index}
// // //           className={`option ${index === activeIndex ? 'active' : ''}`}
// // //           onClick={() => handleOptionChange(index)}
// // //         >
// // //           {option}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default HoverSlider;





// // // // import React, { useState } from 'react';
// // // // import './HoverSlider.css'; // We'll create this CSS file in the next step

// // // // const HoverSlider = () => {
// // // //   const [activeIndex, setActiveIndex] = useState(null);
// // // //   const [hoveredIndex, setHoveredIndex] = useState(null);

// // // //   const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

// // // //   const handleOptionChange = (index) => {
// // // //     setActiveIndex(index);
// // // //   };

// // // //   const handleOptionHover = (index) => {
// // // //     setHoveredIndex(index);
// // // //   };

// // // //   return (
// // // //     <div
// // // //       className={`hover-slider ${activeIndex !== null || hoveredIndex !== null ? 'active' : ''}`}
// // // //       onMouseLeave={() => {
// // // //         setActiveIndex(null);
// // // //         setHoveredIndex(null);
// // // //       }}
// // // //     >
// // // //       {options.map((option, index) => (
// // // //         <div
// // // //           key={index}
// // // //           className={`option ${index === activeIndex || index === hoveredIndex ? 'active' : ''}`}
// // // //           onClick={() => handleOptionChange(index)}
// // // //           onMouseEnter={() => handleOptionHover(index)}
// // // //         >
// // // //           {option}
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HoverSlider;




// // // // // import React, { useState } from 'react';
// // // // // import './HoverSlider.css'; // We'll create this CSS file in the next step

// // // // // const HoverSlider = () => {
// // // // //   const [activeIndex, setActiveIndex] = useState(null);
// // // // //   const [hoveredIndex, setHoveredIndex] = useState(null);

// // // // //   const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

// // // // //   const handleOptionChange = (index) => {
// // // // //     setActiveIndex(index);
// // // // //   };

// // // // //   const handleOptionHover = (index) => {
// // // // //     setHoveredIndex(index);
// // // // //   };

// // // // //   return (
// // // // //     <div className="hover-slider">
// // // // //       {options.map((option, index) => (
// // // // //         <div
// // // // //           key={index}
// // // // //           className={`option ${index === activeIndex || index === hoveredIndex ? 'active' : ''}`}
// // // // //           onClick={() => handleOptionChange(index)}
// // // // //           onMouseEnter={() => handleOptionHover(index)}
// // // // //           onMouseLeave={() => handleOptionHover(null)}
// // // // //         >
// // // // //           {option}
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default HoverSlider;



// // // // // // import React, { useState } from 'react';
// // // // // // import './HoverSlider.css'; // We'll create this CSS file in the next step

// // // // // // const HoverSlider = () => {
// // // // // //   const [activeIndex, setActiveIndex] = useState(0);

// // // // // //   const options = [
// // // // // //     'Option 1',
// // // // // //     'Option 2',
// // // // // //     'Option 3',
// // // // // //     'Option 4',
// // // // // //     'Option 5',
// // // // // //   ];

// // // // // //   const handleOptionChange = (index) => {
// // // // // //     setActiveIndex(index);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="hover-slider">
// // // // // //       {options.map((option, index) => (
// // // // // //         <div
// // // // // //           key={index}
// // // // // //           className={`option ${index === activeIndex ? 'active' : ''}`}
// // // // // //           onClick={() => handleOptionChange(index)}
// // // // // //         >
// // // // // //           {option}
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default HoverSlider;
