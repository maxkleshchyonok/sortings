import { useEffect, useState } from 'react';
import axios from 'axios';
import { Character, Characters } from '../../utils/types';

const RickMorty = () => {
    const [obj, setObj] = useState<Characters | undefined>(undefined);
    const [charect, setCharect] = useState<Character[] | undefined>(undefined);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                const data: Characters = response.data;
                setObj(data);
                let allCharacters: Character[] = [];
                for (let i = 2; i <= data.info.pages; i += 2) {
                    axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`)
                        .then(response => {
                            const pageCharacters: Characters = response.data;
                            pageCharacters.results.forEach(el => {
                                allCharacters.push(el);
                                setCharect(allCharacters);
                            });
                        })
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {charect !== undefined ? (
                // obj.results.map((el) => {
                //     return <div key={el.id}>{el.name}</div>
                // })
                charect.map(el => {
                    return <div key={el.id}>{el.name}</div>
                })
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default RickMorty;