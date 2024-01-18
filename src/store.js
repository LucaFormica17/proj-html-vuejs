import{ reactive } from 'vue';
export const store = reactive({

    items: ['Home','Pages','Courses','Features','Blog','Shop'],

    MostViewed:[
        {
            img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/12/home-personal-finance-blog-03-480x352.jpg',
            work: "BUSINESS",
            articol: 'Ten Benefits Of Rentals That May Change Your Perspective',
            data: 'Dec 28, 2020',
            views: '3,011 views',
        },
        {
            img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/12/home-personal-finance-blog-02-480x352.jpg',
            work: "BUSINESS",
            articol: '10 Things Successful Mompreneurs Do Different',
            data: 'Dec 28, 2020',
            views: '2.643 views',
        },
    ],

    carousell: [
        {
            img: '/src/images/testimonial-avata-02.jpg',
            title: 'High level of efficency and scientific teaching methods',
            paragraph: 'I am free to learn at my own peace, follow my own schedule and choose rhe subject I want to learn from the syllablus. Great study portal for people like me.',
            name: 'MINA HOLLACE',
            role: '/Freelancer'
        },
        {
            img: '/src/images/testimonial-avata-03.jpg',
            title: "It's a choice of quality for people with special needs",
            paragraph: "I'm a very strict person so I required everything to be organized and neat. Then, i'll be able to make things right and shine. MaxCoach guys just got me",
            name: 'FLORENCE THEMES',
            role: '/Multimedia Admin'
        },
        {
            img: '/src/images/testimonial-avata-04.jpg',
            title: "Proffesional team of specialist and passionate mentors at reach",
            paragraph: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students",
            name: 'MADLEY PONDOR',
            role: '/IT specialist'
        },
    ],
   
    featuredCourses: [
        {
            img: 'https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2020/12/finance-course-thumbnail-04-480x298.jpg',
            price: 'Free',
            priceCents: '',
            title: 'Personal Finance: Financial Security Thinking & Principles',
            lessons: 2,
            students: 298,
        },
        {
            img: '/src/images/course-02-480x298.jpg',
            price: '$40',
            priceCents: '.00',
            title: 'Learning to Write as a Professional Author',
            lessons: 20,
            students: 77,
        },
        {
            img: '/src/images/stock-full-hd-03-480x298.jpg',
            price: 'Free',
            priceCents: '',
            title: 'Customer-centric Info-Tech Strategies',
            lessons: 24,
            students: 956,
        },
        {
            img: '/src/images/stock-full-hd-04-480x298.jpg',
            price: '$19',
            priceCents: '.00',
            title: 'Open Programming Courses for Everyone: Python',
            lessons: 17,
            students: 66,
        },
        {
            img: '/src/images/stock-full-hd-06-480x298.jpg',
            price: '$26',
            priceCents: '.00',
            title: 'Academic Listening and Note-taking',
            lessons: 14,
            students: 68,
        },
        {
            img: '/src/images/course-featured-image-01-480x298.jpg',
            price: '$39',
            priceCents: '.00',
            title: 'Master jQuery in a Short Period of Time',
            lessons: 6,
            students: 51,
        }
    ],

    smartTutoring: [
        {
            img: '/src/images/home-2-image-box-01.png',
            title: 'Customize Preferences',
            description: 'Learners are given the right to arrange and customize their study schedule and timetable based on preferences.',
            button: 'Start here',
        },
        {
            img: '/src/images/about-us-02-image-box-02.png',
            title: 'Cloud Storage',
            description: 'You can store online lessons via online cloud or download to your device and revise lessons on the way.',
            button: 'Get Free Quote',
        },
        {
            img: '/src/images/home-2-image-box-03.png',
            title: 'Multimedia Channels',
            description: 'We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.',
            button: 'Start now',
        },
    ]
})

