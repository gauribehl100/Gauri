import React from "react";
import {FcLike , FcLikePlaceholder } from "react-icons/fc"
import { toast} from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)) {
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) ));
            console.log("Like Removed")
            alert("Like Removed")
            toast.warning("Like Removed");
        }
        else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev) => [...prev, course.id]);
            }
            console.log("Like Successfully Added")
            alert("Like Successfully Added")
            toast.success("Liked Successfully");
        }
    }

    return(
        <div className='card'>
            <div className="relative">
                <img src={course.image.url} alt="Images" className="image"/>
                <div className='button'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
                <div className='title'>
                    <p className='ti'>{course.title}</p>
                    <p className='desc'>
                        {
                            course.description.length >100 ? 
                            (course.description.substring(0, 100))  :  (course.description)
                        
             
                        }
                    </p>
                </div>
            </div>
        </div>
    )
};
export default Card;
