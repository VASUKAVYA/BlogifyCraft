import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Mern Stack?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with Mern Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.geeksforgeeks.org/mern-stack-projects/" target='_blank' rel='noopener noreferrer'>
                    Mern Projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://media.licdn.com/dms/image/C4E16AQGRd4WNuBI48A/profile-displaybackgroundimage-shrink_200_800/0/1641885515979?e=2147483647&v=beta&t=urDMrhGCbym2mtkjKmrY5cFw1g0ipW84GGU3BGoFioQ" />
        </div>
    </div>
  )
}