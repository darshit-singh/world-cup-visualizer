import React from 'react';
import './KnockoutPage.css';
import ReactFlow from 'react-flow-renderer';
import { useState } from 'react';
import CountryCard from '../CountryCard/CountryCard';

const KnockoutPage = () => {
    const x = 325;
    const y = 50
    const round1 = [
        [
            {
                name: 'Uruguay',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/23px-Flag_of_Uruguay.svg.png',
                qualifyNext: true,
                goal: '2'
            },
            {
                name: 'Portugal',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/23px-Flag_of_Portugal.svg.png',
                qualifyNext: false,
                goal: '1'
            },
            {
                name: 'France',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png',
                qualifyNext: true,
                goal: '4'
            },
            {
                name: 'Argentina',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/23px-Flag_of_Argentina.svg.png',
                qualifyNext: false,
                goal: '3'
            },
            {
                name: 'Brazil',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png',
                qualifyNext: true,
                goal: '2'
            },
            {
                name: 'Mexico',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/23px-Flag_of_Mexico.svg.png',
                qualifyNext: false,
                goal: '0'
            },
            {
                name: 'Belgium',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/23px-Flag_of_Belgium_%28civil%29.svg.png',
                qualifyNext: true,
                goal: '3'
            },
            {
                name: 'Japan',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/23px-Flag_of_Japan.svg.png',
                qualifyNext: false,
                goal: '2'
            },
            {
                name: 'Spain',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/23px-Flag_of_Spain.svg.png',
                qualifyNext: false,
                goal: '1(3)'
            },
            {
                name: 'Russia',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/23px-Flag_of_Russia.svg.png',
                qualifyNext: true,
                goal: '1(4)'
            },
            {
                name: 'Croatia',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/23px-Flag_of_Croatia.svg.png',
                qualifyNext: true,
                goal: '1(3)'
            },
            {
                name: 'Denmark',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/20px-Flag_of_Denmark.svg.png',
                qualifyNext: false,
                goal: '1(2)'
            },
            {
                name: 'Sweden',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/23px-Flag_of_Sweden.svg.png',
                qualifyNext: true,
                goal: '1'
            },
            {
                name: 'Switzerland',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/16px-Flag_of_Switzerland.svg.png',
                qualifyNext: false,
                goal: '0'
            },
            {
                name: 'Colombia',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/23px-Flag_of_Colombia.svg.png',
                qualifyNext: false,
                goal: '1(3)'
            },
            {
                name: 'England',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/23px-Flag_of_England.svg.png',
                qualifyNext: true,
                goal: '1(4)'
            },

        ],
    ]
    const round2 = [
        {
            name: 'Uruguay',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/23px-Flag_of_Uruguay.svg.png',
            qualifyNext: false,
            goal: '0'
        },
        {
            name: 'France',
            flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png',
            qualifyNext: true,
            goal: '2'
        },
        {
            name: 'Brazil',
            flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png',
            qualifyNext: false,
            goal: '1'
        },
        {
            name: 'Belgium',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/23px-Flag_of_Belgium_%28civil%29.svg.png',
            qualifyNext: true,
            goal: '2'
        },
        {
            name: 'Russia',
            flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/23px-Flag_of_Russia.svg.png',
            qualifyNext: false,
            goal: '2(3)'
        },
        {
            name: 'Croatia',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/23px-Flag_of_Croatia.svg.png',
            qualifyNext: true,
            goal: '2(4)'
        },
        {
            name: 'Sweden',
            flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/23px-Flag_of_Sweden.svg.png',
            qualifyNext: false,
            goal: '0'
        },
        {
            name: 'England',
            flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/23px-Flag_of_England.svg.png',
            qualifyNext: true,
            goal: '2'
        }
    ]
    const round3 = [
        {
            name: 'France',
            flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png',
            qualifyNext: true,
            goal: '1'
        },
        {
            name: 'Belgium',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/23px-Flag_of_Belgium_%28civil%29.svg.png',
            qualifyNext: false,
            goal: '0'
        },
        {
            name: 'Croatia',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/23px-Flag_of_Croatia.svg.png',
            qualifyNext: true,
            goal: '2'
        },
        {
            name: 'England',
            flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/23px-Flag_of_England.svg.png',
            qualifyNext: false,
            goal: '1'
        }
    ]
    const round4 = [
        {
            name: 'France',
            flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png',
            qualifyNext: true,
            goal: '4'
        },
        {
            name: 'Croatia',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/23px-Flag_of_Croatia.svg.png',
            qualifyNext: false,
            goal: '2'
        },
    ]
    const winner = {
        name: 'France',
        flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png',
        qualifyNext: true
    }
    const elements = []
    let i = 0
    //separating each round
    round1.forEach((group, id) => {
        group.forEach((team, index) => {
            i++;
            elements.push({
                id: i,
                type: 'input',
                data: { label: <div className='team'><img alt={team.name} src={team.flag} /><div className='teamName'>{team.name}</div><div className='goals'>{team.goal}</div></div> },
                position: { x: x, y: y * (index + 1) },
                sourcePosition: 'right',
                style: team.qualifyNext ? { backgroundColor: '#bbf3bb' } : ''
            })
        })
    })
    round2.forEach((team, index) => {
        i++;
        elements.push({
            id: i,
            data: { label: <div className='team'><img alt={team.name} src={team.flag} /><div className='teamName'>{team.name}</div><div className='goals'>{team.goal}</div></div> },
            position: { x: 2 * x, y: 2 * y * (index + 1) },
            sourcePosition: 'right',
            targetPosition: 'left',
            style: team.qualifyNext ? { backgroundColor: '#bbf3bb' } : ''
        })
    })
    round3.forEach((team, index) => {
        i++;
        elements.push({
            id: i,
            data: { label: <div className='team'><img alt={team.name} src={team.flag} /><div className='teamName'>{team.name}</div><div className='goals'>{team.goal}</div></div> },
            position: { x: 3 * x, y: 3.5 * y * (index + 1) },
            sourcePosition: 'right',
            targetPosition: 'left',
            style: team.qualifyNext ? { backgroundColor: '#bbf3bb' } : ''
        })
    })
    round4.forEach((team, index) => {
        i++;
        elements.push({
            id: i,
            data: { label: <div className='team'><img alt={team.name} src={team.flag} /><div className='teamName'>{team.name}</div><div className='goals'>{team.goal}</div></div> },
            position: { x: 4 * x, y: 4.5 * y * (index + 1) },
            sourcePosition: 'right',
            targetPosition: 'left',
            style: team.qualifyNext ? { backgroundColor: '#bbf3bb' } : ''
        })
    })
    i++;
    elements.push({
        id: i,
        type: 'output',
        data: { label: <div className='team'><img alt={winner.name} src={winner.flag} /><div className='teamName' style={{ color: '#fff', fontWeight: '700' }}>{winner.name}</div><div className='goals'>{winner.goal}</div></div> },
        position: { x: 5 * x, y: 7 * y },
        targetPosition: 'left',
        style: {
            backgroundColor: '#64acf1e3'
        }
    })
    //for loop to add edges
    let round2Start = 17
    for (let k = 0; k < round2Start - 1; k++) {
        elements.push({
            id: `e${elements[k].id}-${round2Start}`, source: `${elements[k].id}`, target: `${round2Start}`, animated: true,
            style: { stroke: 'red' }
        })
        if (k % 2 !== 0)
            round2Start = round2Start + 1;
        if (round2Start > 31)
            break;
    }
    // console.log(elements)
    const [captureElementClick, setCaptureElementClick] = useState(false);
    const [elementValue, setElementValue] = useState()
    const onElementClick = (event, element) => {
        console.log('click', element);
        setCaptureElementClick(!captureElementClick)
        setElementValue({
            country: 'Spain',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Spain_National_Football_Team_badge.png/180px-Spain_National_Football_Team_badge.png',
            nickName: 'La Roja (The Red One)',
            federation: 'Real Federación Española de Fútbol (RFEF)',
            confederation: 'UEFA (Europe)',
            coach: 'Luis Enrique',
            captain: 'Sergio Busquets'
        })
    }
    return (
        <div style={{ height: '100vh' }}>
            {captureElementClick && <div className='countryContainerDiv' onClick={onElementClick}><CountryCard elementValue={elementValue} /></div>}
            {!captureElementClick && <ReactFlow
                elements={elements}
                onElementClick={onElementClick}
            />}
            {/* <ReactFlow
                elements={elements}
                onElementClick={onElementClick}
            /> */}
        </div>
    )
}

export default KnockoutPage
