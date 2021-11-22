import React from 'react';
import './GroupPage.css';

const GroupPage = () => {
    const groups = [
        [
            {
                name: 'Uruguay',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/23px-Flag_of_Uruguay.svg.png',
                played: '3',
                win: '3',
                draw: '0',
                lose: '0',
                points: '9',
                qualification: true
            },
            {
                name: 'Russia',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/23px-Flag_of_Russia.svg.png',
                played: '3',
                win: '2',
                draw: '0',
                lose: '1',
                points: '6',
                qualification: true
            },
            {
                name: 'Saudi Arabia',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/23px-Flag_of_Saudi_Arabia.svg.png',
                played: '3',
                win: '1',
                draw: '0',
                lose: '2',
                points: '3',
                qualification: false
            },
            {
                name: 'Egypt',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/23px-Flag_of_Egypt.svg.png',
                played: '3',
                win: '0',
                draw: '0',
                lose: '3',
                points: '0',
                qualification: false
            }
        ],
        [
            {
                name: 'Spain',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/23px-Flag_of_Spain.svg.png',
                played: '3',
                win: '1',
                draw: '2',
                lose: '0',
                points: '5',
                qualification: true
            },
            {
                name: 'Portugal',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/23px-Flag_of_Portugal.svg.png',
                played: '3',
                win: '1',
                draw: '2',
                lose: '0',
                points: '5',
                qualification: true
            },
            {
                name: 'Iran',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/23px-Flag_of_Iran.svg.png',
                played: '3',
                win: '1',
                draw: '1',
                lose: '1',
                points: '4',
                qualification: false
            },
            {
                name: 'Morocco',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/23px-Flag_of_Morocco.svg.png',
                played: '3',
                win: '0',
                draw: '1',
                lose: '2',
                points: '1',
                qualification: false
            }
        ],
    ]
    const tables = groups.map((individualGroup, index) => {
        return (
            <table key={index}>
                <tbody>
                    <tr>
                        <th scope="col" width="28">Pos</th>
                        <th scope="col" width="180">Team</th>
                        <th scope="col" width="50">Played</th>
                        <th scope="col" width="50">Win</th>
                        <th scope="col" width="50">Draw</th>
                        <th scope="col" width="50">Lose</th>
                        <th scope="col" width="50">Points</th>
                        <th scope="col" width="180">Qualification</th>
                    </tr>
                    {individualGroup.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td width="28" className={item.qualification ? 'backgroundQualify' : ''}>{index + 1}</td>
                                <th scope="col" width="180" className={item.qualification ? 'backgroundQualify flag' : 'flag'}><img src={item.flag} alt={item.name + 'flag'} />{item.name}</th>
                                <td width="50" className={item.qualification ? 'backgroundQualify' : ''}>{item.played}</td>
                                <td width="50" className={item.qualification ? 'backgroundQualify' : ''}>{item.win}</td>
                                <td width="50" className={item.qualification ? 'backgroundQualify' : ''}>{item.draw}</td>
                                <td width="50" className={item.qualification ? 'backgroundQualify' : ''}>{item.lose}</td>
                                <td width="50" className={item.qualification ? 'backgroundQualify' : ''}>{item.points}</td>
                                <td width="180" className={item.qualification ? 'backgroundQualify' : ''}>{item.qualification ? 'Advance to knockout' : ''}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    })
    return (
        <div className='groupContainer'>
            {tables}
        </div>
    )
}

export default GroupPage
