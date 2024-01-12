import React from 'react'
import { text } from '../ultils/dataContact'
import { Button } from '../components'

const Contact = () => {
  return (
    <div className="p-3 bg-[#ffffff] flex gap-8 flex-col items-center rounded-md w-5/6 border-dashed border-8 border-[#e8eefc] mb-8">
      <img
        src={text.image}
        alt="ảnh liên hệ"
        className="mt-7 h-40 object-contain"
      />
      <h4 className="text-[#233762] text-lg ">{text.content}</h4>
      <div className="flex justify-around text-center w-full font-bold text-lg ">
        {text.contact.map((i, index) => {
          return (
            <div key={index}>
              <h1 className="text-orange-500">{i.text}</h1>
              <div>
                <a
                  href={`tel:${i.phone.match(/\d+/)[0]}`}
                  className="text-[#233762]"
                >
                  {i.phone}
                </a>
              </div>
              <div>
                <a
                  href={`https://zalo.me/${i.zalo.match(/\d+/)[0]}`}
                  className="text-[#233762]"
                  target="_blank"
                  rel="noreferrer"
                >
                  {i.zalo}
                </a>
              </div>
            </div>
          )
        })}
      </div>
      <Button
        text={'Gửi liên hệ'}
        bgColor={'bg-blueColor'}
        textColor={'text-white font-bold mb-8 px-7'}
      />
    </div>
  )
}

export default Contact
