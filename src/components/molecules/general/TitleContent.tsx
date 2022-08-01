import React from 'react';

interface Props {
  text: string;
}

const TitleContent = (props: Props) => {
  const { text } = props;
  const parentClass: string = ''
  + 'bg-gradient-to-tr from-purple-500 '
  + 'to-purple-700 -mt-10 mb-4 rounded-xl '
  + 'text-white grid items-center w-full h-24 '
  + 'py-4 px-8 justify-start shadow-lg-purple';

  return (
    <div className={parentClass}>
      <h2 className="text-white text-2xl">{text}</h2>
    </div>
  );
};

export default TitleContent;
