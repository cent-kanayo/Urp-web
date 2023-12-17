import P1a from '../assets/projects/p1a.png';
import P1b from '../assets/projects/p1b.png';
import P1c from '../assets/projects/p1c.png';
import P1e from '../assets/projects/p1e.png';
import P1f from '../assets/projects/p1f.png';
import P1g from '../assets/projects/p1g.png';
import P1h from '../assets/projects/p1h.png';
import P1i from '../assets/projects/p1i.png';
import P1j from '../assets/projects/p1j.png';
import P1k from '../assets/projects/p1k.png';
import P1l from '../assets/projects/p1l.png';
import P1m from '../assets/projects/p1m.png';
import P1n from '../assets/projects/p1n.png';
import P1o from '../assets/projects/p1o.png';
import P1p from '../assets/projects/p1p.png';
import P1q from '../assets/projects/p1q.png';
import P1r from '../assets/projects/p1r.png';
import P1s from '../assets/projects/p1s.png';
import P1t from '../assets/projects/p1t.png';
import P1u from '../assets/projects/p1u.png';
import P1v from '../assets/projects/p1v.png';
import P1w from '../assets/projects/p1w.png';
import P1x from '../assets/projects/p1x.png';
import P1y from '../assets/projects/p1y.png';
import H1 from '../assets/projects/h1.png';
import H2 from '../assets/projects/h2.png';
import H3 from '../assets/projects/h3.png';
import H4 from '../assets/projects/h4.png';
import H5 from '../assets/projects/h5.png';
import H6 from '../assets/projects/h6.png';
import H7 from '../assets/projects/h7.png';

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
  P1y,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
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
