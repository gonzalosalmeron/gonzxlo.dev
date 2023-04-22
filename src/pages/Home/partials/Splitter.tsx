import CircularText from '@/components/CircularText'

const Splitter = () => {
  return (
    <>
      <div className='relative z-0 mt-40'>
        <div className='absolute -top-[20%] left-1/2 -translate-x-1/2 md:top-[20%]'>
          <CircularText
            text='SACO LO MEJOR DE MI '
            cusClass='bg-purple-200 w-[130px] h-[130px] font-bold animate-spin-slow'
            origin={20}
            height={64}
            textTop={0}
          >
            <img
              src='/src/assets/imgs/happy_face.svg'
              alt=''
              className='w-14'
            />
          </CircularText>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className='text-gray-100'
        >
          <path
            fill='currentColor'
            fill-opacity='1'
            d='M0,160L34.3,154.7C68.6,149,137,139,206,117.3C274.3,96,343,64,411,58.7C480,53,549,75,617,96C685.7,117,754,139,823,128C891.4,117,960,75,1029,64C1097.1,53,1166,75,1234,85.3C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
          ></path>
        </svg>
      </div>
    </>
  )
}

export default Splitter
