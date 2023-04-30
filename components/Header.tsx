import React from 'react';
import Image from 'next/image';
const Header = () => {
  return (
    <>
      <header className="bg-good-header w-full">
        <Image src="/good-boy.png" alt="company-logo" width={100} height={100} className="py-5 mx-auto cursor-pointer" />
      </header>
    </>
  );
};

export default Header;
