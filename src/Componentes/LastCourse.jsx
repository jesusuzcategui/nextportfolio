import React, { useEffect, useState } from 'react';
import { FindCourse } from '../Services/ContentFull';
import { Swiper, SwiperSlide } from 'swiper/react';

const LastCourse = ({}) => {
  const [courses, setCourse] = useState([]);
  const fetchData = async () => {
    try {
      const [status, data] = await FindCourse(5);
      setCourse(data.data.cursoCollection);
    } catch(error) {
      console.log(error);
    }
    
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    </>
  );
};

export default LastCourse;
