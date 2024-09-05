import React from 'react'

const Social = () => {
  return (
    <div
        className='h-screen w-6/12 p-6 border-2 rounded-xl flex justify-center items-center'
    >
        <div
            className='flex flex-col items-center'
        >
            <p
                className='font-bold text-6xl text-white mb-4 text-center'
            >
                Social Interaction Made Fun
            </p>

            <div
                className='w-8/12 border-2 rounded-xl p-2 flex flex-row justify-between items-center'
            >
                <img 
                    src='assets/qr-code.png'
                    className='h-[96px] w-[96px]'
                />

                <div>
                    <p
                        className='font-semibold text-sm text-white w-10/12 mb-2'
                    >
                    Scan QR code and Login to Acolyte or...
                    Login to Votechat
                    </p>

                    <button
                        className='flex flex-row justify-between items-center h-[30px] bg-slate-500/50 py-2 px-2 rounded-xl text-white font-bold text-base'
                    >
                        <img 
                            src="assets/wallets.png" 
                            className="mr-2"
                        /> 
                        Connect Metamask
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Social