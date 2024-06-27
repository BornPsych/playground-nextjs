export default function Home() {
  return (
    <div className='flex flex-col bg-stone-800'>
      <div className='flex h-screen w-full flex-col items-center justify-center gap-4 overflow-auto bg-slate-800'>
        <h1 className='text-center font-mono text-2xl text-slate-500'>
          Div for authentication or forms
        </h1>
        <div className='flex h-auto min-w-[600px] max-w-[900px] flex-col items-center justify-around gap-4 bg-slate-300 p-4'>
          <div className='h-[40px] max-w-[400px] bg-slate-950'></div>
          <div className='h-[40px] max-w-[400px] bg-slate-950'></div>
          <div className='h-[40px] max-w-[400px] bg-slate-950'></div>
          <div className='h-[40px] max-w-[400px] bg-slate-950'></div>
        </div>
      </div>
      <div className='h-screen w-screen bg-slate-500'></div>
      <div className='h-screen w-screen bg-slate-800'></div>
      <div className='h-screen w-screen bg-slate-500'></div>
    </div>
  );
}
