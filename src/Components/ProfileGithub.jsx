import React, { useEffect, useState } from 'react'

function ProfileGithub({UserNaam}) {

    let [user, setUser]=useState(
        {imgurl:'',followers:0,following:0}
    )

    useEffect(()=>{
        fetch(`https://api.github.com/users/${UserNaam}`).then(async function(res){
            let data = await res.json()
            let {avatar_url,followers, following} = data;
            
            setUser(
                ()=>{
                    return{
                        imgurl:avatar_url,
                        followers:followers,
                        following:following,
                    }
                }
            )
        })

    },[])


  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'20px'}}>
        <img style={{maxWidth:'200px'}} src={user.imgurl}/>
        <p style={{padding:'10px',fontSize:'20px'}}>Username: {UserNaam}</p>
        <p style={{padding:'10px',fontSize:'20px'}}>Followers: {user.followers}</p>
        <p style={{padding:'10px',fontSize:'20px'}}>Following: {user.following}</p>
    </div>
  )
}

export default ProfileGithub