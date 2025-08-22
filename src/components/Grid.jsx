// import Card from "./Card";
// function Grid(props) {
//   console.log(props);
//   const cardsList = props.cards || [];

//   return (
//     <>
//       {/* <h4>{props.title}</h4> */}
//       <div className="container text-center">
//         <div className="row justify-content-center">
//           {cardsList.map((card, idx) => (
//             <div
//               className="col-12 col-sm-8 col-md-6 col-lg-3 p-2 d-flex justify-content-center"
//               key={`${props.name}-${idx}`}
//             >
//               <Card carouselId={`carousel-${props.name}-${idx}`} card={card} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Grid;

import Card from "./Card";
function Grid(props) {
  console.log(props);
  const cardsList = props.cards || [];

  return (
    <>
      {/* <h4>{props.title}</h4> */}
      <div className="container text-center">
        <div className="row justify-content-center">
          {cardsList.map((card, idx) => (
            <div
              className="col-12 col-sm-8 col-md-6 col-lg-3 p-2 d-flex justify-content-center"
              key={`${props.name}-${idx}`}
            >
              <Card carouselId={`carousel-${props.name}-${idx}`} card={card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Grid;
