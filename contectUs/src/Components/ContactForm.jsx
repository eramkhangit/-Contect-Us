import React from 'react'
import Btn from './Btn';
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
  return (
    <section className='max-w-7xl m-auto flex'>

      <div className='border-2 border-red-600 flex '>
        <div className='flex gap-8'>

          <Btn text="VIA SUPPORT CHAT" icon={<MdMessage className='text-xl' />} />

          <Btn text="VIA CALL" icon={<IoMdCall className='text-xl' />} />

        </div>

        <Btn isOutLine ={true} text= "VIA EMAIL FORM" icon={<IoMdMail className='text-xl'/>} />

      </div>

    </section>
  )
}

export default ContactForm;