import React, { useEffect, useState } from 'react';
import publicIp from 'public-ip';

const Title = () => {
  const [ip, setIP] = useState(null);

  useEffect(() => {
    publicIp.v4({fallbackUrls:["https://ifconfig.co.ip"] })
    .then(ips=>{
      console.log(ips);
      setIP(ips)});
    /* return (ip) => {
      setIP(null)
    } */
  }, [ip])
  
  return (
    <div className="title">
      <h2>Pictures</h2>
      {ip && <h4>Your IP is cracked! :{ip}</h4>}
    </div>
  )
}

export default Title;