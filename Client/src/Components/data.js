import P1a from '../assets/projects/Proa1.png';
import P1b from '../assets/projects/Proa2.png';
import P1c from '../assets/projects/Proa3.png';
import P1e from '../assets/projects/Proa4.png';
import P1f from '../assets/projects/Proa5.png';
import P1g from '../assets/projects/Proa6.png';
import P1h from '../assets/projects/Proa7.png';
import P1i from '../assets/projects/Proa8.png';
import P1j from '../assets/projects/Proa9.png';
import P1k from '../assets/projects/Proa10.png';
import P1l from '../assets/projects/Proa11.png';
import P1m from '../assets/projects/Proa12.png';
import P1n from '../assets/projects/Proa13.png';
import P1o from '../assets/projects/Proa14.png';
import P1p from '../assets/projects/Proa15.png';
import P1q from '../assets/projects/Proa16.png';
import P1r from '../assets/projects/Proa17.png';
import P1s from '../assets/projects/Proa18.png';
import P1t from '../assets/projects/Proa19.png';
import P1u from '../assets/projects/Proa20.png';
import P1v from '../assets/projects/Proa21.png';
import P1w from '../assets/projects/Proa22.png';
import P1x from '../assets/projects/Proa23.png';
import P1y from '../assets/projects/Proa24.png';
import H1 from '../assets/projects/Proa25.png';
import H2 from '../assets/projects/Proa26.png';
import H3 from '../assets/projects/Proa27.png';
import H4 from '../assets/projects/Proa28.png';
import H5 from '../assets/projects/Proa29.png';
import H6 from '../assets/projects/Proa30.png';
import H7 from '../assets/projects/Proa31.png';
import H8 from '../assets/projects/Proa32.png';
import H9 from '../assets/projects/Proa33.png';
import H10 from '../assets/projects/Proa34.png';
import p2a from '../assets/projects2/1.png';
import p2b from '../assets/projects2/2.png';
import p2c from '../assets/projects2/3.png';
import p2d from '../assets/projects2/4.png';
import p2f from '../assets/projects2/6.png';
import p2g from '../assets/projects2/8.png';
import p2h from '../assets/projects2/9.png';
import p2i from '../assets/projects2/10.png';
import p2j from '../assets/projects2/11.png';
import p2k from '../assets/projects2/12.png';
import p2l from '../assets/projects2/13.png';
import p2m from '../assets/projects2/14.png';
import p2n from '../assets/projects2/15.png';
import p2o from '../assets/projects2/16.png';
import p2p from '../assets/projects2/17.png';
import p2q from '../assets/projects2/18.png';
import p2r from '../assets/projects2/19.png';
import p2s from '../assets/projects2/20.png';
import p2t from '../assets/projects2/21.png';
import p2u from '../assets/projects2/22.png';
import p2v from '../assets/projects2/23.png';
import p2w from '../assets/projects2/24.png';
import p2x from '../assets/projects2/25.png';

import p3a from '../assets/project3/1.png';
import p3b from '../assets/project3/2.png';
import p3c from '../assets/project3/3.png';
import p3d from '../assets/project3/4.png';
import p3f from '../assets/project3/6.png';
import p3g from '../assets/project3/8.png';
import p3h from '../assets/project3/9.png';
import p3i from '../assets/project3/10.png';
import p3j from '../assets/project3/11.png';
import p3k from '../assets/project3/12.png';
import p3l from '../assets/project3/13.png';
import p3m from '../assets/project3/14.png';
import p3n from '../assets/project3/15.png';
import p3o from '../assets/project3/16.png';
import p3p from '../assets/project3/17.png';

export const projectImages = [
  P1m,
  P1a,
  P1b,
  P1c,
  P1e,
  P1f,
  P1f,
  P1g,
  P1h,
  P1i,
  P1k,
  P1j,
  P1l,
  P1n,
  P1o,
  P1p,
  P1q,
  P1r,
  P1s,
  P1t,
  P1u,
  P1v,
  P1w,
  P1x,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  H8,
  H9,
  H10,
];

export const project2 = [
  p2a,
  p2b,
  p2c,
  p2d,
  p2f,
  p2g,
  p2h,
  p2i,
  p2j,
  p2k,
  p2l,
  p2m,
  p2n,
  p2o,
  p2p,
  p2q,
  p2r,
  p2s,
  p2t,
  p2u,
  p2v,
  p2w,
  p2x,
  H3,
  H4,
  H5,
  H6,
  H7,
  H8,
  H9,
  H10,
];
export const project3 = [
  p3a,
  p3b,
  p3c,
  p3d,
  p3f,
  p3g,
  p3h,
  p3i,
  p3j,
  p3k,
  p3l,
  p3m,
  p3n,
  p3o,
  p3p,
];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const paginate = (array, number) => {
  const itemsPerPage = number;
  const numberOfPages = Math.ceil(array.length / itemsPerPage);

  const newArray = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return array.slice(start, start + itemsPerPage);
  });

  return newArray;
};

export default paginate;
