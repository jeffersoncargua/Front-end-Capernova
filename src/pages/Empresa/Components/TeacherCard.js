import Avatar from '../../../assets/avatar.png';

export const TeacherCard = ({teacher,index}) => {


  return (
    <div className={`flex ${index % 2 === 0 ? 'md:justify-start':'md:justify-end'} mb-10`}> 
        <div className="mx-auto md:mx-0 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className={`${index % 2 === 0 ? 'md:order-1 md:rounded-s-lg':'md:order-2 md:rounded-e-lg'} object-fill w-48 h-48 md:w-64 md:h-64  rounded-full mt-5 md:mt-0 md:h-full md:w-80 md:rounded-none`} src={`https://drive.google.com/thumbnail?id=${teacher.photoURL}` || Avatar} alt="" />
            <div className={`${index % 2 === 0 ? 'md:order-2':'md:order-1'} flex flex-col justify-between p-4 leading-normal`}>
                <h5 className="my-2 text-2xl font-bold tracking-tight dark:text-white text-center">{`${teacher.name} ${teacher.lastName}`}</h5>
                <p className="mb-3 font-normal dark:text-white text-justify text-wrap text-sm">{teacher.biografy}</p>
            </div>
        </div>
    </div>
  )
}


/*

<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="">
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>


*/