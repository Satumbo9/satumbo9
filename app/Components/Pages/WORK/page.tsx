import {ART_WORK} from '@/app/Components/Data/ArtWork';
import Image from 'next/image';
import CardItems from '../../Util/CardItems';
import {PROFESSIONAL_CAREER} from '@/app/Components/Data/Profession';


export default function WorkPage() {
    return (
      <section
      id="WORK"
      className="h-[100vh] flex flex-col justify-center">
        <div className=''>
          <p> 
          Art Work
          </p>
          <div className='flex gap-4 '>
            {ART_WORK.map((items)=>(
              <Image 
              key={items.id}
              width={300}
              height={300}
              src={items.url}
              alt='Image of my galary'
              />
            ))}
          </div>
        </div>

        <div className=''>
          <p> 
          Software Dev
          </p>
          {
            PROFESSIONAL_CAREER.map((items)=>(
              <CardItems 
              id={items.id}
              title={items.name}
              description={items.name}


              
              />
            ))
          }
        </div>

        
      </section>
    );
  }
  