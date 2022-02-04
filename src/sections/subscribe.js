import React from 'react';
// import send from '../assets/send.svg';

function subscribe() {
  return (<div>
    <hr/>

    <div style={{margin:'10%'}}>


      <h2 style={{alignItem:'center'}}>Contact Us</h2>
      


    <form
        style={{ height: '50%', width: '50%' }}
        action="https://formsubmit.co/farhanibne760@gmail.com"
        method="POST"
      >
        <input
          style={{
            height: '60px',
            width: '200%',
            border: '1px dashed #202225',
            borderRadius: '5px 5px 5px 5px',
            backgroundColor: 'white',
            color: '#202225',
            padding: '10px'
          }}
          type="email"
          name="email"
          placeholder=" Enter Your E-mail"
          required
        />{' '}
        <br />
        <br />
        <input
          style={{
            height: '65px',
            width: '200%',
            border: '1px dashed #202225',
            borderRadius: '5px 5px 5px 5px',
            backgroundColor: 'white',
            color: '#202225',
            padding: '10px',
            marginBottom: '25px'
          }}
          type="text"
          name="message"
          placeholder=" Ask Me"
          required
        />
        <br /> <br />
        <button  style={{cursor:'pointer',border:'1px solid #202225',background:'white', height:'50px',width:'130px',fontSize:'28px',padding:'10px',borderRadius:'5px 5px 5px 5px'}} type="submit">Send</button>
      </form>{' '}
     
     
</div>

  </div>);
}

export default subscribe;
