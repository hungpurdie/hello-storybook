import { SVGProps } from 'react';

const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='m15 6-6 6 6 6' stroke={props.color} strokeWidth={1.5} strokeLinejoin='round' />
  </svg>
);

export default SvgChevronLeft;
