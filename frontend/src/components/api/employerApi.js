import Axios from 'axios';
const url = `http://localhost:5000/api/`

export const postedjob = async () => {
    await Axios.get(url + `postedjobs/${localStorage.getItem('employerId')}`).then(res=>console.log(res)).catch((err)=>console.log(err))
}

