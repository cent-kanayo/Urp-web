import { PhoneOutlined } from '@mui/icons-material';
import React from 'react';

const CluterCard = ({ name, number }) => {
  return (
    <article className="md:w-[357px] flex justify-between items-center bg-[#57A0A0] rounded-[2px] px-6 py-4">
      <p>{name}</p>
      <PhoneOutlined />
    </article>
  );
};

export default CluterCard;
