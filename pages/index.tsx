import { sendContactForm, sendContactFormToDB } from '@/lib/api';
import { useState } from 'react';

import Header from '@/components/Header';
import Alert from '@/components/Alert';

export default function Home() {
  const [data, setData] = useState({
    senderName: '',
    senderEmail: '',
    recipientName: '',
    recipientEmail: '',
    message: '',
  });

  const [alert, setAlert] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: any) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!data.senderEmail || !data.senderEmail || !data.recipientEmail || !data.recipientName || !data.message) {
      setAlertMessage('⚠️ Data error, you shall no pass');
      setAlert('error');
    } else {
      setAlertMessage('✅ Data confirmed, may be proceed');
      setAlert('success');
    }
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    await sendContactFormToDB(data);
    await sendContactForm(data);
  };

  return (
    <>
      {/* start header */}
      <Header />
      {/* end header */}
      {/* start main content --> sender message form */}
      <form className="my-10" onSubmit={handleSubmit}>
        <div className="w-[90%] lg:w-1/2 bg-good-card-grey mx-auto p-5 rounded-t-md border-[1px] border-good-card-line">
          <label className="form-label">Sender</label>
          <div className="flex md:flex-row flex-col mt-5 mb-8 gap-[15px]">
            <input className="input-style capitalize" required type="text" placeholder="Sender Name" name="senderName" value={data.senderName} onChange={handleChange} />
            <input className=" input-style required" type="email" placeholder="Sender Email" name="senderEmail" value={data.senderEmail} onChange={handleChange} />
          </div>
          <label className="form-label">Recipient</label>
          <div className="flex md:flex-row flex-col mt-5 mb-8 gap-[15px]">
            <input className="input-style capitalize" required type="text" placeholder="Recipient Name" name="recipientName" value={data.recipientName} onChange={handleChange} />
            <input className=" input-style required" type="email" placeholder="Recipient Email" name="recipientEmail" value={data.recipientEmail} onChange={handleChange} />
          </div>
          <label className="form-label">Message</label>
          <div className="flex md:flex-row flex-col mt-5 mb-8 gap-[15px]">
            <textarea className="input-style h-32" required placeholder="Message here..." value={data.message} name="message" onChange={handleChange}></textarea>
          </div>
        </div>
        <div className="w-[90%] lg:w-1/2 bg-good-card-grey mx-auto px-5 py-8 rounded-b-md border-[1px] border-good-card-line">
          <button className="w-full ring-white ring-2 md:w-1/2 py-2 font-bold bg-good-button text-white rounded-md">SUBMIT</button>
        </div>
      </form>
      {/* end main content --> sender message form */}
      <Alert alertStatus={alert} alertMessage={alertMessage} showAlert={showAlert} />
    </>
  );
}
