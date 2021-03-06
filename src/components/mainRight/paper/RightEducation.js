import { Context } from 'contexts/context';
import React, { useContext} from 'react'

function RightEducation() {
    const {control, content , contentFake} = useContext(Context);
    console.log(contentFake);
    let contentUse;
    if(control){
        contentUse = contentFake;
    }else {
        contentUse = content;
    }
    let title;
    console.log(contentUse.education);
    if(Object.keys(contentUse.education).length < 3){
        title =  '';

    }else{
        title = (
            <h3>Education</h3>
        )
    }
    return (
        <div className="rightExperence">
            <div className="">
                <h3>  {title}</h3>
                <ul>
              <p>{contentUse.education.institition}</p>
                 <p>{contentUse.education.city}</p> 
                <p>{contentUse.education.major}</p>
               <p>{contentUse.education.add}</p>
                </ul>
            </div>
        </div>
    )
}

export default RightEducation;
