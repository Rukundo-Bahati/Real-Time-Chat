import React, { useContext, useState } from 'react'
import {AuthContext} from '../../context/authenticationContext'
import './comments.scss' 
import Logo from '../../assets/portfolio .jpg'

const Comments = () => {

  const{currentUser} = useContext(AuthContext)
     
    const comments = [

        {
         id:1,
         name: "John Doe",
         userId:1,
         profilePic: "https://picsum.photos/id/237/536/354",
         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quia.",
         img: "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/429750047_122137298180104285_5263665374153719590_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=mpTtkL8MJy8AX_rE77i&_nc_ht=scontent-ams4-1.xx&oh=00_AfAi0yfg9G8gxaRCHNx1bj6SIaNGo94L1LGT2FZ0ZkvpWg&oe=65E75B7E"
        },
   
        {
         id:1,
         name: "Jane Doe",
         userId:1,
         profilePic: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/408971530_6890519294387978_1925771731702521913_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=c42490&_nc_ohc=Uc6NsujIQ1QAX9_QEn3&_nc_ht=scontent-fra5-2.xx&oh=00_AfBih9EeayKO-PUeoIzEYV4ZfwHY4O27IWIurl9TMkPqFw&oe=65E8CAC2",
         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, quia.",
         img: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/408971530_6890519294387978_1925771731702521913_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=c42490&_nc_ohc=Uc6NsujIQ1QAX9_QEn3&_nc_ht=scontent-fra5-2.xx&oh=00_AfBih9EeayKO-PUeoIzEYV4ZfwHY4O27IWIurl9TMkPqFw&oe=65E8CAC2"
        },
      ]

     
   

  return (
    <div className='comments'>
     <div className="write">
     <img src= {Logo} alt="" />
     <input type="text" placeholder='Write a comment' />
     <button>Send</button>
     </div>

    {comments.map(comment=>(
        <div className="comment">
      <img src= {comment.profilePic} alt="" />
      <div className="info">
       <span> {comment.name} </span>
       <p>{comment.desc}</p>
      </div>
       <span className='date'>1 hour ago</span>
        </div>
    ))}
      
    </div>
  )
}

export default Comments
