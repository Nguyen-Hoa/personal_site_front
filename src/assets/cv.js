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
                'Founding Member and Vice President of Skate Club',
                'ACM Student Leadership',
            ],
        },

        {
            location: "University of California, Merced",
            position: "Master of Science",
            time: {
                start: {
                    month: "January",
                    year: "2021",
                },
                end: {
                    month: "December",
                    year: "2022",
                },
            },
            description: [],
        },
    ],

    /* Employment */
    employment: [
        {
            location: "UC Merced MoCA Lab",
            position: "Graduate Student Researcher (GSR)",
            time: {
                start: {
                    month: "October",
                    year: "2020",
                },
                end: {
                    month: "Current",
                    year: " ",
                },
            },
            description: [
                'Explore novel load balancing methods for reducing power consumption of datacenters using machine learning.',
                'Prototype Docker load balancing network test bed among 5 Linux servers.',
                'Develop and train neural networks in Tensorflow for predicting power consumption of physical servers.'
            ],
        },

        {
            location: "Consulting: DateSpot.love, Ad-Vital",
            position: "Lead Developer, Software Developer",
            time: {
                start: {
                    month: "November",
                    year: "2020",
                },
                end: {
                    month: "Current",
                    year: " ",
                },
            },
            description: [
                'Collaborate in remote teams to deliver QA-tested web applications for business solutions in a timely manner.',
                'Maintain website uptime and meet quality of service terms, while organizing weekly sprints to introduce new features.',
                'Develop serverless solutions to meet business requirements using AWS, Firebase, and Google Cloud'
            ],
        },

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
                'Maintain program website in Drupal7 environment utilizing HTML, CSS and Javascript.',
                'Led up to 50 students in classroom interviews to share about their experiences with the curriculum.',
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
                'Collaborate with faculty and students of the computer vision and health informatics labs to compile a survey paper on deep learning models used for nutrition assistance.',
                'Curate a hand-labeled dataset of over 3000 food images called HoosierMommies.',
                'Train state-of-the-art image classifiers in PyTorch for private data-set, average of 90% accuracy.',
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
                'Develop Pandas tools that efficiently parse building HVAC data for reinforcement learning algorithms.',
                'Implement link quality estimation algorithms in embedded devices and Linux based system.',
            ],
        },
    ],

    /* Awards */
    awards: [
        {
            organization: "Innovate to Grow, Mobile App Challenge",
            title: "1st Place Winner for Eye Tracking Telemedicine App",
            date: {
                month: "December", 
                year: "2019",
            },
            description: [
            ],
        }
    ],

    skills: {
        languages: {
            programming: [
                "Python",
                "C++",
                "Javascript",
                "MATLAB",
                "SQL",
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
                "Tensorflow",
                "Numpy",
                "Pandas",
            ],
            web: [
                "React",
                "REST",
                "SQL",
                "MongoDB",
                "Docker",
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