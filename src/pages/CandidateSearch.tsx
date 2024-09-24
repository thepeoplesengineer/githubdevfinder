import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  const fetchCandidate = async () => {
    try {
      const [user] = await searchGithub();
      if (!user || !user.login) {
        throw new Error("No user data returned from API");
      }
      const userDetails = await searchGithubUser(user.login);
      setCandidate(userDetails);
    } catch (error) {
      console.error("Error fetching candidate:", error);
      
    }
  };
  

  const saveCandidate = () => {
    if (candidate) {
      const newSavedCandidates = [...savedCandidates, candidate];
      setSavedCandidates(newSavedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(newSavedCandidates));
      fetchCandidate(); 
    }
  };

  const skipCandidate = () => {
    fetchCandidate(); 
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  return (
    <div>
      {candidate ? (
        <div>
          <img src={candidate.avatar_url} alt="Avatar" />
          <h2>{candidate.name || candidate.login}</h2>
          <p>{candidate.location}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
          <div>
            <button onClick={saveCandidate}>+</button> 
            <button onClick={skipCandidate}>-</button> 
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CandidateSearch;

