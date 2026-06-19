import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <center><Link href="/Home">Home</Link> | <Link href="/about">About</Link> | <Link href="/Service">Service</Link> | <Link href="/contract">Contract</Link></center>
      
      <center> Home page</center>
    
    </div>
  );
}
