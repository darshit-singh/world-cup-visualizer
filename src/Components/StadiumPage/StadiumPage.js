import React from 'react';
import './StadiumPage.css';

const StadiumPage = () => {
    const stadiumArr = [
        {
            name: 'Luzhniki Stadium',
            city: 'Moscow',
            capacity: '78,011',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D0%A1%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD_%D0%9B%D1%83%D0%B6%D0%BD%D0%B8%D0%BA%D0%B8_%2829_%D0%BC%D0%B0%D1%80%D1%82%D0%B0_2017%29_%C2%B7_23.jpg/200px-%D0%A1%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD_%D0%9B%D1%83%D0%B6%D0%BD%D0%B8%D0%BA%D0%B8_%2829_%D0%BC%D0%B0%D1%80%D1%82%D0%B0_2017%29_%C2%B7_23.jpg',
            destinationUrl: 'https://en.wikipedia.org/wiki/Luzhniki_Stadium'
        },
        {
            name: 'Otkritie Arena',
            city: 'Moscow',
            capacity: '44,190',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Stadium_Spartak_in_Moscow_%28cropped%29.jpg/200px-Stadium_Spartak_in_Moscow_%28cropped%29.jpg',
            destinationUrl: 'https://en.wikipedia.org/wiki/Otkritie_Arena'
        },
        {
            name: 'Krestovsky Stadium',
            city: 'Saint Petersburg',
            capacity: '64,468',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Spb_06-2017_img42_Krestovsky_Stadium.jpg/200px-Spb_06-2017_img42_Krestovsky_Stadium.jpg',
            destinationUrl: 'https://en.wikipedia.org/wiki/Krestovsky_Stadium'
        },
        {
            name: 'Fisht Olympic Stadium',
            city: 'Sochi',
            capacity: '44,287',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sochi_adler_aerial_view_2018_23.jpg/200px-Sochi_adler_aerial_view_2018_23.jpg',
            destinationUrl: 'https://en.wikipedia.org/wiki/Fisht_Olympic_Stadium'
        },
        {
            name: 'Volgograd Arena',
            city: 'Volgograd',
            capacity: '43,713',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Volgograd_arena_aerial_view_1.jpg/200px-Volgograd_arena_aerial_view_1.jpg',
            destinationUrl: 'https://en.wikipedia.org/wiki/Volgograd_Arena'
        },
        {
            name: 'Rostov Arena',
            city: 'Rostov-on-Don',
            capacity: '43,472',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Rostov_Arena2018_%28cropped%29.jpg/200px-Rostov_Arena2018_%28cropped%29.jpg',
            destinationUrl: 'https://en.wikipedia.org/wiki/Rostov_Arena'
        },
        {
            name: 'Nizhny Novgorod Stadium',
            city: 'Nizhny Novgorod',
            capacity: '43,319',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Nizhny_Novgorod_Stadium_asv2019-05.jpg/200px-Nizhny_Novgorod_Stadium_asv2019-05.jpg',
            destinationUrl: 'https://en.wikipedia.org/wiki/Nizhny_Novgorod_Stadium'
        },
        {
            name: 'Kazan Arena',
            city: 'Kazan',
            capacity: '42,873',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C_%D0%B0%D1%80%D0%B5%D0%BD%D0%B0.jpg/200px-%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C_%D0%B0%D1%80%D0%B5%D0%BD%D0%B0.jpg',
            destinationUrl: 'https://en.wikipedia.org/wiki/Kazan_Arena'
        },
        {
            name: 'Samara Arena',
            city: 'Samara',
            capacity: '41,970',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Samara_arena.png/200px-Samara_arena.png',
            destinationUrl: 'https://en.wikipedia.org/wiki/Samara_Arena'
        },
        {
            name: 'Mordovia Arena',
            city: 'Saransk',
            capacity: '41,685',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/MordoviaArenaStadium.jpg/200px-MordoviaArenaStadium.jpg',
            destinationUrl: 'https://en.wikipedia.org/wiki/Mordovia_Arena'
        },
        {
            name: 'Kaliningrad Stadium',
            city: 'Kaliningrad',
            capacity: '33,973',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Kaliningrad_stadium_-_2018-04-07.jpg/200px-Kaliningrad_stadium_-_2018-04-07.jpg',
            destinationUrl: 'https://en.wikipedia.org/wiki/Kaliningrad_Stadium'
        },
        {
            name: 'Central Stadium',
            city: 'Yekaterinburg',
            capacity: '33,061',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/E-burg_asv2019-05_img22_Central_Stadium.jpg/200px-E-burg_asv2019-05_img22_Central_Stadium.jpg',
            destinationUrl: 'https://en.wikipedia.org/wiki/Central_Stadium_(Yekaterinburg)'
        },
    ]
    const cards = stadiumArr.map((item, index) => {
        return (
            <a href={item.destinationUrl} target='_blank' rel='noreferrer' key={index} className='card'>
                <div className='stadiumName'>
                    {item.name}
                </div>
                <div className='cityName'>
                    {item.city}
                </div>
                <img className='imageContainer' src={item.imgUrl} alt={item.name} />
            </a>
        )
    })
    return (
        <div className='stadiumContainer'>
            <div className='cardsContainer'>
                {cards}
            </div>
        </div>
    )
}

export default StadiumPage
