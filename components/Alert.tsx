import React from 'react';
interface Props {
  alertMessage: string;
  alertStatus: string;
  showAlert: boolean;
}
const Alert = ({ alertMessage, alertStatus, showAlert }: Props) => {
  return (
    <div className={`${showAlert === true ? 'fixed' : 'hidden'}  w-full z-20 bottom-0`}>
      <p className={`w-[80%] lg:w-[30%] mb-5 rounded-lg text-lg text-white font-semibold mx-auto  text-center p-5 ${alertStatus === 'success' ? 'bg-good-successfully' : 'bg-good-failed'}`}>{alertMessage}</p>
    </div>
  );
};

export default Alert;
