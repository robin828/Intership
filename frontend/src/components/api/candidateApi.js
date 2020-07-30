import Axios from 'axios';

signup = async () => {
    await Axios.post("http://localhost//5000/candidate", {
        name,
        email,
        password,
        experience
    }).then(response=>console.log(response))
    .catch(error=>console.log(error));
}
