import React, {useState} from 'react';
import InfoOne from './postJobs/InfoOne';
import InfoTwo from './postJobs/InfoTwo';
import Confirm from './postJobs/Confirm';
import InfoThree from './postJobs/InfoThree';
const PostJob = () => {
    const [step, setStep] = useState(1)
    const [name, setName] = useState("")
    const [jobType, setJobType] = useState("")
    const [startDate, setStartDate] = useState("")
    const [duration, setDuration] = useState("")
    const [stipend, setStipend] = useState(1000)
    const [workType, setWorkType] = useState("")
    const [aboutWork, setAboutWork] = useState("")
    const [skillsRequired, setSkillsRequired] = useState("")
    const [whoCanApply, setWhoCanApply] = useState("")
    const [vaccancy, setVaccancy] = useState(1)
    const [perks, setPerks] = useState("")

    const nextStep = () => {
         setStep(step+1)
         console.log("ertyu")
    }
    const prevStep = () => {
        setStep(step-1)
   }
    switch(step) {
        case 1:
            return (
                <InfoOne nextStep={nextStep}
                name={name} 
                setName={setName}
                jobType={jobType}
                setJobType={setJobType}
                startDate={startDate}
                setStartDate={setStartDate}
                duration={duration}
                setDuration={setDuration}
                />
            )
        case 2:
            return (
                <InfoTwo 
                nextStep={nextStep}
                stipend={stipend}
                setStipend={setStipend}
                workType={workType}
                setWorkType={setWorkType}
                aboutWork={aboutWork}
                setAboutWork={setAboutWork}
                prevStep={prevStep}
                skillsRequired={skillsRequired}
                setSkillsRequired={setSkillsRequired}
                />
            )
        case 3:
            return (
                <InfoThree 
                nextStep={nextStep}
                whoCanApply={whoCanApply}
                setWhoCanApply={setWhoCanApply}
                vaccancy={vaccancy}
                setVaccancy={setVaccancy}
                perks={perks}
                setPerks={setPerks}
                prevStep={prevStep}
                />
            )
        case 4:
            return (
                <Confirm 
                name={name} 
                jobType={jobType}
                startDate={startDate}
                duration={duration}
                nextStep={nextStep}
                stipend={stipend}
                workType={workType}
                aboutWork={aboutWork}
                prevStep={prevStep}
                skillsRequired={skillsRequired}
                whoCanApply={whoCanApply}
                vaccancy={vaccancy}
                perks={perks}
        />
                )
       
    }
}

export default PostJob