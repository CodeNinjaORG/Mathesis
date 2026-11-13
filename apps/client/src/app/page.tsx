import {sayHelloWorld} from '@mathesis/utils'

export default function Home() {
  
  const message = sayHelloWorld();

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
