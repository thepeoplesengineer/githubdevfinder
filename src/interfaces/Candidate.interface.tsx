// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    login: string;
    avatar_url: string;
    html_url: string;
    name?: string;
    location?: string;
    email?: string;
    company?: string;
  }
  
  export default Candidate;
  