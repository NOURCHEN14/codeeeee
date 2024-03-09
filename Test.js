import React, { Fragment, useState } from "react" ;
import { Link, json } from "react-router-dom";
import { useEffect, useState } from 'react';
import Footer from "./Footer" ;
function Test (){
   
    function Form() {
        const [utilisateurs, setUtilisateurs] = useState([])
        const [question1, setQuestion1] = useState("")
        const [question2, setQuestion2] = useState("")
        const [question3, setQuestion3] = useState("")
        const [question4, setQuestion4] = useState("")
        const [question5, setQuestion5] = useState("")
        const [question6, setQuestion6] = useState("")
        const [question7, setQuestion7] = useState("")
        const [question8, setQuestion8] = useState("")
        const [question9, setQuestion9] = useState("")
        const [question10, setQuestion10] = useState("")
        const [question11, setQuestion11] = useState("")
        const [question12, setQuestion12] = useState("")
        const [question13, setQuestion13] = useState("")
        const [question14, setQuestion14] = useState("")
        const [question15, setQuestion15] = useState("")
        const [question16, setQuestion16] = useState("")
        const [question17, setQuestion17] = useState("")
        const [question18, setQuestion18] = useState("")
        const [userActif, setUserActif] = useState(0)

        useEffect(()=> {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{return response.json()})
            .then((data)=>setUtilisateurs(data));
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response)=>{return response.json()})
            .then((data)=>setQuestions(data));
          }, [])

          function handleClick(id) {
            setUserActif(id)
          }

        function handleSubmit(e) {
            e.preventDefault();
            alert(`${question1} ${question2} ${question3} ${question4} ${question5} ${question6} ${question7} ${question8} ${question9} ${question10} ${question11} ${question12} ${question10} 
            ${question11} ${question12} ${question13} ${question14} ${question15} ${question16} ${question17} ${question18}`)
        }

     return(
        <Fragment>
     <div className="agileits-banner">
        <div className="bnr-agileinfo">
   
            <div className="top-nav w3-agiletop">
                <div className="container">
                    <div className="navbar-header w3llogo">
                   
                        <h1>
                        <Link to="/">KIDOPIA</Link>
                            </h1>
                    </div>
                </div>  
            </div>  
        </div>
     </div>
    <br/><br/><br/><br/>  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="centered">
        <div className="test"><br/>
            <h2>Test de Questions </h2>
       
                <br/>
               
            <h4>Apprentissage :</h4><br/>

            <form className="form" onSubmit={(e)=>handleSubmit(e)}> 
                <label>Question 1: Quels sont les intérêts particuliers de votre enfant ? </label>
                <input type="text" id="question1" name="question1" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion1(e.target.value)} required /><br /> <br />


                <label>Question 2: Comment votre enfant réagit-il aux changements dans sa routine quotidienne ? </label>
                <input type="text" id="question2" name="question2" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion2(e.target.value)} required /> <br /> <br />


                <label>Question 3: Votre enfant montre-t-il des signes de répétition compulsive de comportements ou d'actions ? </label>
                <input type="text" id="question3" name="question3" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion3(e.target.value)} required /><br /> <br />


                <h4>Communication:</h4><br/>


                <label>Question 4: Comment votre enfant interagit-il avec les autres lorsqu'il veut quelque chose ?</label>
                <input type="text" id="question4" name="question4" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion4(e.target.value)} required /><br /><br />


                <label>Question 5: Votre enfant utilise-t-il le langage verbal pour communiquer ses besoins et ses désirs ?</label>
                <input type="text" id="question5" name="question5" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion5(e.target.value)} required /><br /><br />


                <label>Question 6: Votre enfant présente-t-il des difficultés à comprendre les blagues, les métaphores ou les expressions idiomatiques ? </label>
                <input type="text" id="question6" name="question6" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion6(e.target.value)} required /><br /><br />


                <h4>Compétences sociales :</h4><br/>


                <label>Question 7: Comment votre enfant interagit-il avec ses pairs, notamment en ce qui concerne le jeu, les conversations ou les activités de groupe ? </label>
                <input type="text" id="question7" name="question7" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion7(e.target.value)} required /><br /><br />


                <label>Question 8: Est-ce que votre enfant recherche activement l'interaction sociale ou préfère-t-il jouer seul ? </label>
                <input type="text" id="question8" name="question8" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion8(e.target.value)} required /><br /><br />


                <label>Question 9: Quels sont les principaux défis de votre enfant en matière de compréhension des règles sociales et des normes de comportement ? </label>
                <input type="text" id="question9" name="question9" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion9(e.target.value)} required /><br /><br />


                <h4>Routines et préférences :</h4><br/>


                <label>Question 10: Comment votre enfant réagit-il aux transitions d'une activité à l'autre, comme passer du jeu à l'apprentissage ou du temps calme à l'activité physique ? </label>
                <input type="text" id="question10" name="question10" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion10(e.target.value)}  required /><br /><br />


                <label>Question 11: Est-ce que votre enfant a des intérêts ou des passions particulièrement forts, et si oui, lesquels ? </label>
                <input type="text" id="question11" name="question11" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion11(e.target.value)} required /><br /><br />


                <h4>Sensibilités sensorielles :</h4><br/>


                <label>Question 12: Comment votre enfant réagit-il aux changements de température ou aux situations impliquant une surstimulation sensorielle ? </label>
                <input type="text" id="question12" name="question12" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion12(e.target.value)} required /><br /><br />


                <label>Question 13: Est-ce que votre enfant est sensible à certains stimuli sensoriels, comme les bruits forts, les lumières vives ou les textures spécifiques ? </label>
                <input type="text" id="question13" name="question13" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion13(e.target.value)} required /><br /><br />


                <label>Question 14: Est-ce que votre enfant utilise des stratégies d'adaptation pour faire face aux sensibilités sensorielles, comme le port de vêtements spéciaux ou l'utilisation d'écouteurs antibruit ? </label>
                <input type="text" id="question14" name="question14" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion14(e.target.value)} required /><br /><br />
               
                <h4>Comportements défis : </h4><br/>


                <label>Question 15: Quels soutiens ou ressources supplémentaires pourraient être utiles pour aider votre enfant à faire face aux comportements défis ? </label>
                <input type="text" id="question15" name="question15" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion15(e.target.value)}  required /><br /><br />


                <label>Question 16: Est-ce que ces comportements défis semblent être déclenchés par des situations spécifiques ou des facteurs environnementaux ? </label>
                <input type="text" id="question16" name="question16" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion16(e.target.value)}  required /><br /><br />


                <h4> Services et soutiens : </h4><br/>


                <label>Question 17: Quels services ou thérapies votre enfant reçoit-il actuellement pour soutenir son développement et son bien-être ? </label>
                <input type="text" id="question17" name="question17" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion17(e.target.value)}  required /><br /><br />


                <label>Question 18: Quelles sont vos principales préoccupations ou priorités en ce qui concerne les besoins de votre enfant en matière d'apprentissage, de communication et de compétences sociales, et quels types de soutien supplémentaires recherchez-vous ? </label>
                <input type="text" id="question18" name="question18" placeholder="Votre réponse SVP ..." onChange={(e)=>setQuestion18(e.target.value)} required /><br /><br />








              

      {
        utilisateurs.map((utilisateur, index) => {
          return (
            <p key={index}>
              {utilisateur.questions} 
              <button type="submit" onClick={()=>handleClick(utilisateur.id)}>Envoyer</button>
              <div>
                {
                  userActif===utilisateur.id
                  ?<ul> {
                    articles.filter((item)=>item.userId===parseInt(userActif))
                    .map((article)=> {
                      return <li>{article.id} {article.title}</li>
                    })
                    }
                    </ul>
                  :null
                }
              </div>
            </p>
          )
        })
      }


              
                
            </form>
         </div>
        </div>


        <br/><br/><br/>  <br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


<Footer/>        
        </Fragment>


)
}}
export default Test;
