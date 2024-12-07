import React from 'react';
import Com1 from '../../../src/image/comA.jpg';
import Com2 from '../../../src/image/comB.jpg';
import Com3 from '../../../src/image/comC.jpg';
import Com4 from '../../../src/image/comD.jpg';
import Com5 from '../../../src/image/comE.jpg';
import Com6 from '../../../src/image/comF.png';
import Com7 from '../../../src/image/comG.jpg';
import Com8 from '../../../src/image/comH.jpg';
import Com9 from '../../../src/image/comI.jpg';
import Com10 from '../../../src/image/comJ.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './commentaire.css';
function Commentaire() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const data = [
    {
      image: Com1,
      title: 'Abdallah',
      commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
    },
    {
      image: Com2,
      title: 'Mohammed Alrami',
      commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
    },
    {
      image: Com10,
      title: 'Fatima Al Zahra',
      commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
    },
    {
      image: Com4,
      title: 'Ryan Fahmi',
      subtitle: 'PETITS TRAVAUX',
      commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
    },
    {
      id: 5,
      image: Com5,
      title: 'Mohamed Ali',
      commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
    },
    {
      image: Com6,
      title: 'Nordin',
      commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
    },
    {
      id: 7,
      image: Com7,
      title: 'Ali',
      subtitle: 'NETTOYAGE',
      commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
    },
    {
      id: 8,
      image: Com8,
      title: 'Hasnae',
      subtitle: 'DÉPANNAGE & RÉPARATION',
      commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
    },
    {
      image: Com9,
      title: 'Rafik',
      commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
    },
    {
      image: Com3,
      title: 'Hayat',
      commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
    },
  ];

  return (
    <div className='div'>
      <h1>Que Dit Le Client ?</h1>
      <div className='div1'>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className='div2'>
              <div className='div3'>
                <img src={item.image} alt='' className='div4' />
              </div>
              <div className='div5'>
                <h3 className="div6">{item.title}</h3>
                <p className='div7'>{item.commentaire}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Commentaire;


















// import React from 'react';
// import './commentaire.css';
// import Com1 from '../../../src/image/comA.jpg';
// import Com2 from '../../../src/image/comB.jpg';
// import Com3 from '../../../src/image/comC.jpg';
// import Com4 from '../../../src/image/comD.jpg';
// import Com5 from '../../../src/image/comE.jpg';
// import Com6 from '../../../src/image/comF.png';
// import Com7 from '../../../src/image/comG.jpg';
// import Com8 from '../../../src/image/comH.jpg';
// import Com9 from '../../../src/image/comI.jpg';
// import Com10 from '../../../src/image/comJ.jpg';
// import { Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// const data = [
//   {
//     id: 1,
//     image: Com1,
//     title: 'Abdallah',
//     subtitle: 'DÉPANNAGE & RÉPARATION',
//     commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
//   },
//   {
//     id: 2,
//     image: Com2,
//     title: 'Mohammed Alrami',
//     subtitle: 'DÉPANNAGE & RÉPARATION',
//     commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
//   },
//   {
//     id: 3,
//     image: Com10,
//     title: 'Fatima Al Zahra',
//     subtitle: 'PETITS TRAVAUX',
//     commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
//   },
//   {
//     id: 4,
//     image: Com4,
//     title: 'Ryan Fahmi',
//     subtitle: 'PETITS TRAVAUX',
//     commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
//   },
//   {
//     id: 5,
//     image: Com5,
//     title: 'Mohamed Ali',
//     subtitle: 'PETITS TRAVAUX',
//     commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
//   },
//   {
//     id: 6,
//     image: Com6,
//     title: 'Nordin',
//     subtitle: 'NETTOYAGE',
//     commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
//   },
//   {
//     id: 7,
//     image: Com7,
//     title: 'Ali',
//     subtitle: 'NETTOYAGE',
//     commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
//   },
//   {
//     id: 8,
//     image: Com8,
//     title: 'Hasnae',
//     subtitle: 'DÉPANNAGE & RÉPARATION',
//     commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
//   },
//   {
//     id: 9,
//     image: Com9,
//     title: 'Rafik',
//     subtitle: 'NETTOYAGE',
//     commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
//   },
//   {
//     id: 10,
//     image: Com3,
//     title: 'Hayat',
//     subtitle: 'NETTOYAGE',
//     commentaire: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Magni aut quas tempora facere id reprehenderit',
//   },


// ];

// const Commentaire = () => {
//   return (
//     <div className="testimonials">
//       <section >
//         <div className='sectionTitleCommentaire'>
//           <h1 className="section_title">Nos clients satisfaits par nos services</h1>
//           <p className="Commentairetitle"> </p>
//         </div>
//         <Swiper className="testimonials_container grd"
//           modules={[Pagination]}
//           spaceBetween={20}
//           slidesPerView={1}
//           loop={true}
//           grabCursor={true}
//           pagination={{ clickable: true }}
//         >
//           {data.map(({ id, image, title, subtitle, commentaire }) => {
//             return (
//               <SwiperSlide className="testimonials_item" key={id}>
//                 <div className="thumb">
//                   <img src={image} alt="" className='rounded-pill' />
//                 </div>
//                 <h3 className="testimonials_title">{title}</h3>
//                 <h5 className="subtitle">{subtitle}</h5>
//                 <div className="comment">{commentaire}</div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </section>
//     </div>
//   );
// };

// export default Commentaire;