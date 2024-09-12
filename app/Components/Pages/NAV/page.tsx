import Link from 'next/link';




// This the navigation Section  

export default function Nav() {
    return (
      // Header for the nav bar 
      <header>
        <div className="h-[8vh] flex justify-between text-[2em] pt-[30px] mb-5">
          <div>
            <Link  
            className='flex gap-[1em]'
            href={'#Home'}>Satumbo9
            <code>
            {`</>`}  
            </code> 
            </Link>
          </div>
          <div>
            <ul className='flex gap-[10em]'>
              <li>
                <Link href={"#ABOUT"}>about</Link>
              </li>
              <li>
                <Link 
                className='flex flex-col text-center'
                href={'#WORK'}>
                <p>work</p>
                <p className='text-[16px]'>2018-2024</p>
                </Link>
              </li>
              <li>
                <Link href={'#TALK'}>talk-to-me</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </header>
    );
  }
  