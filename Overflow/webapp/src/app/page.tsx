import {AcademicCapIcon} from "@heroicons/react/16/solid";
import {Button} from "@heroui/button";


export default function Home() {
  return (
 <><div className='text-4xl text-red-500'>Overflow App</div>
  <Button color='primary'>
    Click me!
    <AcademicCapIcon className="size-6" />
  </Button></>
  );
}
