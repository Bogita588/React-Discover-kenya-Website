import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/Bs'
import {CiLocationOn} from 'react-icons/ci'

const Search = () => {
  return (
    <div className="searchDiv grid gp-10 bg-Silver rounded-[10px] p-[3rem]">
      <form action=''>

        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-Silver-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className='text-[25px] icon' />
            <input type="text" className='bg-transparent text-blue-500
            focus:outline-none w-[100%]' placeholder='Search Internship ' />

            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6]
            hover:text-textColor-icon" />
          </div>
          <div className="flex gap-2 items-center">
            <BsHouseDoor className='text-[25px] icon' />
            <input type="text" className='bg-transparent text-blue-500
            focus:outline-none w-[100%]' placeholder='Search by Company ' />

            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6]
            hover:text-textColor-icon" />

          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className='text-[25px] icon' />
            <input type="text" className='bg-transparent text-blue-500
            focus:outline-none w-[100%]' placeholder='Search by Location ' />

            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6]
            hover:text-textColor-icon" />

          </div>

          <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white
          cursor-pointer hover:bg-purple'>Search</button>

          

        </div>
      </form>

    </div>

  )
}

export default Search