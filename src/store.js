import{ reactive } from 'vue';
export const store = reactive({


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
    ]
   

})

