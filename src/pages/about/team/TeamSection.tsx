import React, { useState, useEffect } from 'react'
import { TeamSectionBox } from './TeamSectionStyle'
import { TeamList } from '../../../utils/Config'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Box } from "@mui/material"
import { withStyles } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Ri4KFill } from 'react-icons/ri';
import Avatar from '@mui/material/Avatar';



const listTeam = [
    {
        title: "Desarrollo",
        description: "Lorem ipsum dolor sit amet, consectetur adip incididunt et justo e parturient mont taciti socios",
        members: [
            {
                name: 'Olivier Tassinari',
                flag: 'v1.x co-creator',
                location: 'Paris, France',
                image: 'https://i.imgur.com/EXQVxqQ.png',
                social: [
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                ],


            },
            {
                name: 'Matt Brookes',
                flag: 'Pioneer',
                location: 'London, UK',
                image: 'https://i.imgur.com/EXQVxqQ.png',

                social: [
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                ],
            },
            {
                name: 'Sebastian Silbermann',
                flag: 'Community team',
                location: 'Dresden, Germany',
                image: 'https://i.imgur.com/EXQVxqQ.png',

                social: [
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                ],
            },
            {
                name: 'Damien Tassone',
                flag: 'Enterprise team',
                location: 'London, UK',
                image: 'https://i.imgur.com/EXQVxqQ.png',

                social: [
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                ],
            },
            {
                name: 'Marija Najdova',
                flag: 'Community team',
                location: 'Skopje, North Macedonia',
                image: 'https://i.imgur.com/EXQVxqQ.png',

                social: [
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                ],
            },
            {
                name: 'Danail Hadjiatanasov',
                flag: 'Enterprise team',
                location: 'Amsterdam, Netherlands',
                image: 'https://i.imgur.com/EXQVxqQ.png',

                social: [
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                ],
            },
            {
                name: 'Josh Wooding',
                flag: 'Community member, J.P. Morgan',
                location: 'London, UK',
                image: 'https://i.imgur.com/EXQVxqQ.png',

                social: [
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                    {
                        icon: Ri4KFill,
                        url: 'https://twitter.com/'
                    },
                ],
            },
        ]
    },
    {
        title: "Implementacion",
        description: "Lorem ipsum dolor sit amet, consectetur adip incididunt et justo e parturient mont taciti socios",
        members:
            [

                {
                    name: 'Matt Brookes',
                    flag: 'Pioneer',
                    location: 'London, UK',
                    image: 'https://i.imgur.com/EXQVxqQ.png',

                    social: [
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                    ],
                },
                {
                    name: 'Sebastian Silbermann',
                    flag: 'Community team',
                    location: 'Dresden, Germany',
                    image: 'https://i.imgur.com/EXQVxqQ.png',

                    social: [
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                    ],
                },
                {
                    name: 'Damien Tassone',
                    flag: 'Enterprise team',
                    location: 'London, UK',
                    image: 'https://i.imgur.com/EXQVxqQ.png',

                    social: [
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                    ],
                },
                {
                    name: 'Marija Najdova',
                    flag: 'Community team',
                    location: 'Skopje, North Macedonia',
                    image: 'https://i.imgur.com/EXQVxqQ.png',

                    social: [
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                    ],
                },
                {
                    name: 'Danail Hadjiatanasov',
                    flag: 'Enterprise team',
                    location: 'Amsterdam, Netherlands',
                    image: 'https://i.imgur.com/EXQVxqQ.png',

                    social: [
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                    ],
                },
                {
                    name: 'Josh Wooding',
                    flag: 'Community member, J.P. Morgan',
                    location: 'London, UK',
                    image: 'https://i.imgur.com/EXQVxqQ.png',

                    social: [
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                    ],
                },
            ]
    },
    {
        title: "Ventas",
        description: "Lorem ipsum dolor sit amet, consectetur adip incididunt et justo e parturient mont taciti socios",
        members:
            [

                {
                    name: 'Sebastian Silbermann',
                    flag: 'Community team',
                    location: 'Dresden, Germany',
                    image: 'https://i.imgur.com/EXQVxqQ.png',

                    social: [
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                    ],
                },
                {
                    name: 'Damien Tassone',
                    flag: 'Enterprise team',
                    location: 'London, UK',
                    image: 'https://i.imgur.com/EXQVxqQ.png',

                    social: [
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                    ],
                },
                {
                    name: 'Marija Najdova',
                    flag: 'Community team',
                    location: 'Skopje, North Macedonia',
                    image: 'https://i.imgur.com/EXQVxqQ.png',

                    social: [
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                    ],
                },
                {
                    name: 'Danail Hadjiatanasov',
                    flag: 'Enterprise team',
                    location: 'Amsterdam, Netherlands',
                    image: 'https://i.imgur.com/EXQVxqQ.png',

                    social: [
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                    ],
                },
                {
                    name: 'Josh Wooding',
                    flag: 'Community member, J.P. Morgan',
                    location: 'London, UK',
                    image: 'https://i.imgur.com/EXQVxqQ.png',

                    social: [
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                        {
                            icon: Ri4KFill,
                            url: 'https://twitter.com/'
                        },
                    ],
                },
            ]
    }
]



const TeamSection = () => {
    const [selectedItem, setSelectedItem] = useState(TeamList[0])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        const interval = setInterval(() => {
            nextNewItem(selectedIndex, TeamList)
        }, 3500)

        return () => {
            clearInterval(interval)
        }
    })





    const nextNewItem = (index: number, items: any, next = true) => {
        //console.log(loaded)

        setLoaded(false)
        setTimeout(() => {
            const condition = next ? selectedIndex < items.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : items.length - 1)
            setSelectedItem(items[nextIndex])
            setSelectedIndex(nextIndex)
        }, 1000)
    }

    const selectedNewItem = (nextIndex: number) => {
        setLoaded(false)
        setTimeout(() => {
            setSelectedItem(TeamList[nextIndex])
            setSelectedIndex(nextIndex)
        }, 1000)
    }




    return (
        <TeamSectionBox>

            <div className="title-section-container">
                <h6 className="section-title">Nuestra Equipo</h6>
            </div>


            <Grid container padding='20px' gap='20px' style={{
                maxWidth:"1200px"
            }}>
                {
                    listTeam.map((team, index) =>
                        <Grid display='grid' gap='20px' textAlign='left'>
                            <Grid>
                                <Typography component="h2" variant="h5">
                                    {team.title}
                                </Typography>
                                <Typography>{team.description}</Typography>
                            </Grid>

                            <Grid container spacing={2} >
                                {team.members.map((member, index) => (
                                    <Grid key={member.name} item xs={12} md={6} >
                                        <Paper variant="elevation" elevation={4} >
                                            <Grid
                                                container
                                                alignItems='center'
                                                gap="20px"
                                                padding='10px 20px'>
                                                <Grid
                                                    display='flex'
                                                    justifyContent='center'
                                                    alignItems='center'
                                                    width='80px'
                                                    height='80px'
                                                >
                                                    <Avatar
                                                        style={{
                                                            width: '100%',
                                                            height: '100%'
                                                        }}
                                                        alt="Remy Sharp"
                                                        src={member.image}
                                                    />

                                                </Grid>
                                                <Grid style={{ textAlign: 'left' }}>
                                                    <Typography component="h3" variant="h6">
                                                        {member.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {member.flag}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {member.location}
                                                    </Typography>
                                                    <Grid container>
                                                        {member.social.map(social =>
                                                            <a href={social.url} target='_blank'>                                                            
                                                            <h5><social.icon /></h5>
                                                            </a>
                                                        )

                                                        }
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    )
                }

            </Grid>
        </TeamSectionBox>
    );
}

export default TeamSection