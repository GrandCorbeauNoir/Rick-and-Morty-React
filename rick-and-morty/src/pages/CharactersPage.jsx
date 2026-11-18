import { useState, useEffect } from "react"
import axios from "axios"
import CharCard from "../components/CharCard"





function CharactersPage() {

  const [characters, setCharacters] = useState([])
  const [currUrl, setCurrUrl] = useState("https://rickandmortyapi.com/api/character")
  const [prev, setPrev] = useState(null)
  const [next, setNext] = useState(null)

  const getCharacters = async() => {
      let response = await axios.get(currUrl)
      let data = response.data
      console.log(data.info)
      setNext(data.info.next)
      setPrev(data.info.prev)

      setCharacters(data.results)
    }
  
  useEffect(() => {
    getCharacters()


  }, [])

   useEffect(() => {
     console.log(characters)
   }, [characters])




  return (
    <>
      <h1>Characters Page</h1>
      <div style={{display:"flex",width:"100%",'justifyContent':"space-between"}}>
       <button disabled={!prev}>Previous</button>
       <button disabled={!next}>Next</button>
       </div>
      
      <div style={{display:"flex", gap:"2px", flexWrap:"wrap" }}>
      {characters.map((character) => ( 
        <CharCard key={character.id} 
        character={character} />
      
      ))}
      </div>
    </>
  )
}

export default CharactersPage




















// function CharactersPage() {
//   // Store characters from the API
//   const [characters, setCharacters] = useState([]);

//   // Track loading and errors
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch characters when the component loads
//   useEffect(() => {
//     const fetchCharacters = async () => {
//       try {
//         const response = await axios.get(
//           "https://rickandmortyapi.com/api/character"
//         );

//         setCharacters(response.data.results);
//       } catch (err) {
//         setError("Failed to load characters.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCharacters();
//   }, []);

//   // Conditional rendering
//   if (loading) {
//     return <h2 className="text-center mt-5">Loading characters...</h2>;
//   }

//   if (error) {
//     return <h2 className="text-center text-danger mt-5">{error}</h2>;
//   }

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center mb-4">
//         Rick and Morty Characters
//       </h1>

//       <div className="row">
//         {characters.map((character) => (
//           <div className="col-md-4 col-lg-3 mb-4" key={character.id}>
//             <div className="card h-100 shadow">

//               {/* Character Image */}
//               <img
//                 src={character.image}
//                 className="card-img-top"
//                 alt={character.name}
//               />

//               {/* Character Information */}
//               <div className="card-body">
//                 <h5 className="card-title">
//                   {character.name}
//                 </h5>

//                 <p className="card-text">
//                   <strong>Status:</strong> {character.status}
//                   <br />

//                   <strong>Species:</strong> {character.species}
//                   <br />

//                   <strong>Gender:</strong> {character.gender}
//                   <br />

//                   <strong>Origin:</strong> {character.origin.name}
//                   <br />

//                   <strong>Location:</strong> {character.location.name}
//                 </p>
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CharactersPage;













