import React from 'react'
import { Brain, TrendingUp } from 'lucide-react';


const Header = ({ progress, activeTodos, totalTodos }) => {
    // let progress = 50
    // let activeTodos = 4
    // console.log(progress);
    console.log(activeTodos);


    return (
        <>
            <div className='backdrop-blur-2xl bg-gradient-to-br from-white/10 via-indigo-500/10 to-transparent rounded-3xl border border-indigo-400/20 p-6 mb-4 shadow-2xl shadow-indigo-900/30'>
                <div className='flex items-center justify-between mb-4'>


                    {/* left side */}
                    <div className='flex items-center gap-3'>
                        <div className='relative '>
                            <div className='w-12 h-12  bg-linear-to-br from-blue-500 via-blue-900 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg'>
                                <Brain className='text-white' size={24} />
                            </div>

                            <div className='absolute -top-1  w-4 h-4 bg-emerald-400 rounded-full animate-ping'>

                            </div>
                        </div>

                        <div className='    '>
                            <h1 className='text-3xl font-black text-white tracking-tight'>Tasky</h1>

                            <p className='text-cyan-300 text-xs font-medium tracking-normal'>
                                Organize. Focus. Conquer
                            </p>
                        </div>

                    </div>

                    {/* right side */}
                    <div className='flex items-center gap-2 px-4 py-2 bg-linear-to-br from-violet-500/2 to-fuchsia-500/20 rounded-full border-violet-400/30 '>
                        <TrendingUp size={16} className='text-emerald-400' />
                        <span className='text-white font-bold text-sm'>{activeTodos} Active</span>

                    </div>

                </div>

                {/* Progress bar */}
                {totalTodos > 0 && <div className='relative'>
                    <div className='flex justify-between items-center'>
                        <span className='text-white/70 text-xs font-semibold'>Progress</span>
                        <span className='text-white font-bold text-sm'>{Math.round(progress)}</span>

                    </div>

                    <div className='relative w-full h-2 bg-white/10 rounded-full overflow-hidden'>
                        <div className='absolute inset-0 bg-linear-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-full transition-all duration-700 ease-out shadow-lg ' style={{ width: `${progress}%` }}>

                        </div>

                        <div className='absolute inset-0 bg-linear-to-br from-transparent via-white/30 to-transparent animate-shimmer rounded-full '>

                        </div>

                    </div>

                </div>}


            </div>



        </>
    )
}

export default Header