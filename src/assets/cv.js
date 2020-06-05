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
            description: [],
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
            description: [],
        },

        {
            location: "McSwain Elemntary School",
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
            description: [],
        },

        {
            location: "Indiana University, Bloomington",
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
            description: [],
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
                "C++",
                "Python",
                "Javascript",
                "Matlab",
                "HTML",
                "Java",
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

            ],
            web: [
                "React",
                "Django",
            ],
            misc: [],
        }
    },
}

module.exports = curriculum_vitae;
//export default curriculum_vitae;

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