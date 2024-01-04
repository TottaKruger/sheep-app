import { useSelector } from 'react-redux';
import CandyCard from '../Components/CandyCard';
import { useEffect, useState } from 'react';
import style from './StartPage.module.scss';

function StartPage() {
    const [candies, setCandies] = useState([]);
    const [candiesFromStore, setCandiesFromStore] = useState([]);
    // hämta godis från storen
    const state = useSelector((state) => {
        return state;
    });
    useEffect(() => {
        setCandies(state.candies);
        setCandiesFromStore(state.candies);
    }, [state]);

    function handleSearchInput(input) {
        setCandies(candiesFromStore);
        let candiesCopy = [...candiesFromStore];
        let filteredCandies = candiesCopy.filter((candy) => candy.name.includes(input));
        setCandies(filteredCandies);
    };
    return (
        <main className={style.main}>
            <section className={style.searchContainer}>
                <input placeholder='search sheep...' onChange={(e) => handleSearchInput(e.target.value)}></input>
            </section>
            <section className={style.candyCards}>
                {
                    candies &&
                    candies.map((candy) => <CandyCard key={candy.id} candy={candy} />)
                }
            </section>
            
        </main>
    );
}

export default StartPage;