import React, { useState } from 'react'
import Btn from './Btn';
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {

  const viaCallFunction = () => console.log("Hello, I'm via call function ");

  // _________________ Use Hook _____________
  const [name, setName] = useState("xyz")
  const [email, setEmail] = useState("abc@email.com")
  const [text, setText] = useState("Text")

  // _____________________ State  _____________
  // let name
  // let email
  // let text

  // ________________ Submit Form ______________
  const submitFunction = (event) => {

    event.preventDefault()

    // name = event.target[0].value
    // email = event.target[1].value
    // text = event.target[2].value

    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)

  }


  return (

    <section className='h-calc[100vh - h-52] flex-col max-w-1xl p-8 m-auto flex mt-2 gap-4 sm:max-w-2xl md:max-w-4xl md:flex-row '>

      <div className=' m-auto flex flex-col gap-6 w-full sm:max-w-xl'>

        <div className='flex flex-col gap-2 sm:flex-row justify-between'>

          <Btn onClick={viaCallFunction} text="VIA SUPPORT CHAT" icon={<MdMessage className='text-xl' />} />

          <Btn onClick={viaCallFunction} text="VIA CALL" icon={<IoMdCall className='text-xl' />} />

        </div>

        <Btn isOutLine={true} text="VIA EMAIL FORM" icon={<IoMdMail className='text-xl' />} />

        <form onSubmit={submitFunction} className='flex gap-5 flex-col'>

          <div className='flex flex-col max-w-xl h-10 relative'>
            {/* <label htmlFor="name" className='absolute  text-xl left-3 top-1'>Name</label> */}
            <input type="text" name="name" placeholder='Name' className='h-10 border-2 border-black p-4 rounded-md' />
          </div>

          <div className='flex flex-col max-w-xl h-10 relative'>
            {/* <label htmlFor="email" className='absolute left-3 top-1  text-xl'>Email</label> */}
            <input type="text" name="email" placeholder='Email' className='h-10 border-2 border-black p-4 rounded-md' />
          </div>
         
          <div className='flex flex-col max-w-xl h-10 relative'>
          {/* <label htmlFor="text" className='absolute left-3  text-xl'>Text</label> */}
            <textarea name="" id="" placeholder='Text Area' cols="20" rows="10" className='max-w-xl border-2 border-black p-4 rounded-md'></textarea>

          </div>

          <div className='flex max-w-xl justify-center'>
            <Btn text="SUBMIT BUTTON " />
          </div>

          <div className='border-2 border-black max-w-xl bg-slate-200 rounded-md '>
            <h6 className='text-center'>{name}</h6>
            <h6 className='text-center'>{email}</h6>
            <h6 className='text-center'>{text}</h6>
          </div>
        </form>

      </div>

      <div className=" max-w-xl mt-4 sm:w-full m-auto  md:h-96 ">
        <img src="./public/Image/24x7serviceImg.jpg
        " alt="24x7service" />
      </div>

    </section>

  )
}

export default ContactForm;