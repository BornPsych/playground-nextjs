export default function Home() {
  return (
    <div className='flex flex-col overscroll-none bg-stone-800'>
      <div className='flex h-screen w-full flex-col items-center justify-center gap-4 bg-slate-800'>
        <h1 className='text-center font-mono text-2xl text-slate-500'>
          Div for authentication or forms
        </h1>
        <div className='flex h-auto w-full max-w-[900px] flex-col items-center justify-around gap-4 bg-slate-300 p-4'>
          <div className='h-[40px] w-full max-w-[400px] bg-teal-600'>hello</div>
          <div className='h-[40px] w-full max-w-[400px] bg-teal-600'></div>
          <div className='h-[40px] w-full max-w-[400px] bg-teal-600'></div>
          <div className='h-[40px] w-full max-w-[400px] bg-teal-600'></div>
        </div>
      </div>
      <div className='flex h-screen w-full flex-row flex-wrap items-center justify-center gap-4 overflow-x-auto bg-slate-500 px-4'>
        <div className='h-48 w-full min-w-[100px] max-w-[400px] bg-green-500'></div>
        <div className='h-48 w-full min-w-[100px] max-w-[400px] bg-green-500'></div>
        <div className='h-48 w-full min-w-[100px] max-w-[400px] bg-green-500'></div>
        <div className='h-48 w-full min-w-[100px] max-w-[400px] bg-green-500'></div>
        <div className='h-48 w-full min-w-[100px] max-w-[400px] bg-green-500'></div>
      </div>
      <div className='h-screen w-full overflow-scroll bg-slate-800'>
        <div className='grid grid-cols-2 gap-10 p-10'>
          <div className='h-100 min-h-40 w-full rounded bg-amber-500'></div>
          <div className='h-100 min-h-40 w-full rounded bg-amber-500'></div>
          <div className='h-100 min-h-40 w-full rounded bg-amber-500'></div>
          <div className='h-100 min-h-40 w-full rounded bg-amber-500'></div>
          <div className='h-100 min-h-40 w-full rounded bg-amber-500'></div>
          <div className='h-100 min-h-40 w-full rounded bg-amber-500'></div>
          <div className='h-100 min-h-40 w-full rounded bg-amber-500'></div>
          <div className='h-100 min-h-40 w-full rounded bg-amber-500'></div>
        </div>
      </div>
      <div className='min-h-screen w-full bg-slate-500'></div>
    </div>
  );
}

// remember width is by default auto that contains hug content
// Always remember to use grids for grid styling
