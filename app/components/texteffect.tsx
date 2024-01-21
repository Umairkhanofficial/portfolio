import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Next Js',
        1000,
        'Python',
        1000,
        'Typescript',
        1000
      ]}
      wrapper="span"
      speed={70}
      style={{ fontSize: '2em', display: 'inline-block' }}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};
export default TextEffect;