import React, {useState} from "react"
import Rarities from "./Rarities";
import t1 from "./images/t1S.webp"
import t2 from "./images/t2S.webp"
import t3 from "./images/t3S.webp"
import t4 from "./images/t4S.webp"
import t5 from "./images/t5S.webp"

export default function NechromaticsList() {

    /*const {nechromatics, setNechromatics} = useContext(NechromaticsContext)

    //we set data retrieval inside a function to prevent
    //errors caused by useEffect not being able to return anything
    useEffect(()=> {

        async function fetchData(){
            try {
                const response = await NechromaticFinder.get("/")
                setNechromatics(response.data.data.nechromatics)
            } catch (error){
                console.log(error);
            }
        };

        fetchData();
    },[])*/

    const [openModal, setOpenModal] = useState(false)

    return (
        <section className={"nechro-display"}>
             <h2>What will you get?</h2>
                <div className={"nechro-query-container"}>
                    <div className={"nechromatic-card__container"}>
                        <div className={"nechromatic-card t1"} >
                            <img className={"nechromatic-card__img"} src={t1} alt={"tier1"} height={284} width={237} />
                            <div className={"nechromatic-card__txt-container"}>
                                <h4 className={"nechromatic-card__txt"}>Common</h4>
                            </div>
                        </div>
                    </div>
                    <div className={"nechromatic-card__container"}>
                        <div className={"nechromatic-card t2"} >
                            <img className={"nechromatic-card__img"} src={t2} alt={"tier2"} height={284} width={237} />
                            <div className={"nechromatic-card__txt-container"}>
                                <h4 className={"nechromatic-card__txt"}>Uncommon</h4>
                            </div>
                        </div>
                    </div>
                    <div className={"nechromatic-card__container"}>
                        <div className={"nechromatic-card t3"} >
                            <img className={"nechromatic-card__img"} src={t3} alt={"tier3"} height={284} width={237} />
                            <div className={"nechromatic-card__txt-container"}>
                                <h4 className={"nechromatic-card__txt"}>Rare</h4>
                            </div>
                        </div>
                    </div>
                    <div className={"nechromatic-card__container"} >
                        <div className={"nechromatic-card t4"} >
                            <img className={"nechromatic-card__img"} src={t4} alt={"tier4"} height={284} width={237} />
                            <div className={"nechromatic-card__txt-container"}>
                                <h4 className={"nechromatic-card__txt"}>Epic</h4>
                            </div>
                        </div>
                    </div>
                    <div className={"nechromatic-card__container"}>
                        <div className={"nechromatic-card t5"} >
                            <img className={"nechromatic-card__img"} src={t5} alt={"tier5"} height={284} width={237} />
                            <div className={"nechromatic-card__txt-container"}>
                                <h4 className={"nechromatic-card__txt"}>Legendary</h4>
                            </div>
                        </div>
                    </div>
                </div>
            <div className={"btn-container"}>
                <button className={"rarities-btn"} onClick={() => setOpenModal(true)}> Rarity chart</button>
                {/*short circuit notation, here we send the values to Rarities.js through props
                    this means we are letting closeModal work as setOpenModal*/}
                {openModal && <Rarities closeModal={setOpenModal} />}
            </div>
        </section>
    )
}