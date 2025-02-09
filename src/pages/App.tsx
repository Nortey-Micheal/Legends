import { Link } from 'react-router'

import { useSelector } from 'react-redux'
import { StoreType } from '../redux/store'
import { pupil } from '../redux/profiles/profileSlice'


function App() {
  const profiles = useSelector((state:StoreType) => state.profiles)
  const femaleStudents:pupil[] = profiles.filter((profile) => profile.gender == 'female')
  const maleStudents:pupil[] = profiles.filter((profile) => profile.gender == 'male')

  return (
    <section className='text-violet-950 flex flex-col items-center max-w-5xl m-5 mx-auto'>
      <h1 className='text-center underline text-2xl font-extrabold'>Pupils in Basic 6</h1>
      <div className='lg:flex mt-10'>
        <div className='mb-10 max-w-6xl w-lg mx-auto'>
          <h2 className='text-center underline text-lg font-bold mb-5'>Females (Omegas)</h2>
          <div className='max-w-4xl lg:gap-10 lg:mr-10 flex flex-col items-center lg:flex-row gap-8'>
          {femaleStudents.map(student => (
            <div className='flex flex-col gap-5 mb-8 w-full' id={student.name} >
              <Link to={`/profile/${student.name}`} className='flex flex-col h-[200px]  hover:text-purple-400'>
              <img className='w-50 rounded-full mx-auto aspect-square' src={student.image} alt={student.name} />
              <p className='text-center mt-2 text-[20px]'>{student.name}</p>
              </Link>
            </div>
          ))}
          </div>
        </div>
        <div className='max-w-6xl w-2xl '>
          <h2 className='text-center underline text-lg font-bold mb-5'>Males (Alphas)</h2>
          <div className='max-w-3xl lg:gap-10 flex flex-col items-center lg:flex-row gap-8'>
            {maleStudents.map(student => (
              <div className='flex flex-col mb-8 gap-5 w-full' id={student.name} >
                <Link to={`/profile/${student.name}`} className='flex flex-col h-[200px]  hover:text-purple-400'>
                <img className='rounded-full w-50 mx-auto aspect-square bg-purple-950' src={student.image} alt={student.name} />
                <p className='text-center mt-2 text-[20px]'>{student.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
