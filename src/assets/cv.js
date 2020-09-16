// Hoa"s CV
var curriculum_vitae = {

    /* Education */
    education: [
        {
            location: "University of California, Merced",
            position: "Bachelor of Science",
            time: {
                start: {
                    month: "August",
                    year: "2016",
                },
                end: {
                    month: "May",
                    year: "2020",
                },
            },
            description: [
                'Computer Science Major',
                'Founding Member and Vice President of Skate Club',
                'ACM Student Leadership',
            ],
        },

        {
            location: "University of California, Merced",
            position: "Master of Science",
            time: {
                start: {
                    month: "August",
                    year: "2020",
                },
                end: {
                    month: "May",
                    year: "2022",
                },
            },
            description: [],
        },
    ],

    /* Employment */
    employment: [
        {
            location: "UC Merced, Center for Engaged Teaching and Learning",
            position: "SATAL Intern",
            time: {
                start: {
                    month: "November",
                    year: "2018",
                },
                end: {
                    month: "June",
                    year: "2020",
                },
            },
            description: [
                'Maintained professional attitude through all responsibilities and interactions with staff and students.',
                'Led up to 50 students in classroom interviews to share about their experiences with the curriculum.',
                'Communicated with instructors from all disciplines to develop more engaging curriculum from collected data.',
            ],
        },

        {
            location: "McSwain Elementary School",
            position: "GATE Instructor",
            time: {
                start: {
                    month: "January",
                    year: "2019",
                },
                end: {
                    month: "May",
                    year: "2019",
                },
            },
            description: [
                'Teach students grades 4-7 basic computer theory and programming.'
            ],
        },

        {
            location: "Indiana University, Bloomington: ProHealth",
            position: "Undergraduate Computer Vision Researcher",
            time: {
                start: {
                    month: "May",
                    year: "2019",
                },
                end: {
                    month: "July",
                    year: "2019",
                },
            },
            description: [
                'Compiled a survey paper on image classification and health informatics.',
                'Trained state-of-the-art image classifier on private data set of 3000 food images, with average 90% accuracy.',
                'Presented research poster at Indiana University Summer Symposium.',
            ],
        },

        {
            location: "University of California, Merced: Wan Du Lab",
            position: "Researcher Assistant",
            time: {
                start: {
                    month: "November",
                    year: "2018",
                },
                end: {
                    month: "May",
                    year: "2019",
                },
            },
            description: [
                'Developed efficient tools to parse structured HVAC data for reinforcement learning algorithms.',
                'Implemented novel low level network protocols for LoRaWAN in Linux-based system in C++ and Python.',
            ],
        },
    ],

    /* Awards */
    awards: [
        {
            organization: "UC Merced, Innovate to Grow",
            title: "1st Place, Mobile App Challenge",
            date: {
                month: "December", 
                year: "2019",
            },
            description: [],
        }
    ],

    skills: {
        languages: {
            programming: [
                "Python",
                "C++",
                "Javascript",
                "MATLAB",
                "MySQL",
            ],
            lingual: [
                "English",
                "Vietnamese",
            ],
        },
        technologies: {
            graphics: [
                "OpenGL",
                "GLSL",
            ],
            machine_learning: [
                "PyTorch",
                "Numpy",
                "SQL",
            ],
            web: [
                "React",
                "REST",
                "Django",
            ],
            misc: [],
        }
    },
}

// React, ES6
export default curriculum_vitae;

// old JS
// module.exports = curriculum_vitae;

/** Templates **/

/* Education/Employment Template
{
    location: "",
    position: "",
    time: {
        start: {
            month: "",
            year: "",
        },
        end: {
            month: "",
            year: "",
        },
    },
    description: [],
},

*/

/* Awards Template 
{
    organization: "",
    title: "",
    date: {
        month: "", 
        year: "",
    },
    description: [],
}

*/