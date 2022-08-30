new Vue({
    el: '#h2',
    data: {
        subtitle: 'OUR PROMISE TO YOU',
        defaultTitle: 'VALPROP. Sed perspiciatis omnis iste natus',
        title: 'VALPROP. Sed perspiciatis omnis iste natus',
        inputText: '',
    },
    // methods: {
    //     addText() {
    //         this.title = this.defaultTitle + 'New Text';
    //     },
    //     delText() {
    //         this.title = this.defaultTitle;
    //     }
    // }
});

new Vue({
    el: '#valprop-blocks',
    data: {
        blocks: [
            {
                icon: 'img/val-prop/1.svg',
                title: 'Quality service. Everytime.',
                text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'
            },
            {
                icon: 'img/val-prop/2.svg',
                title: 'Services by certified pros',
                text: 'Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.'
            },
            {
                icon: 'img/val-prop/3.svg',
                title: 'Real people. Honest work.',
                text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur illum.'
            }
        ]
    },
})

new Vue({
    el: '#services-blocks',
    data: {
        blocks: [
            {
                link: '#',
                icon: 'img/services/1.svg',
                title: 'Multi Point Inspections',
                text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'
            },
            {
                link: '#',
                icon: 'img/services/2.svg',
                title: 'Auto Repair',
                text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'
            },
            {
                link: '#',
                icon: 'img/services/3.svg',
                title: 'Auto Maintenance',
                text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'
            },


            {
                link: '#',
                icon: 'img/services/4.svg',
                title: 'Tires',
                text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'
            },
            {
                link: '#',
                icon: 'img/services/5.svg',
                title: 'Service Warranty',
                text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'
            },
            {
                link: '#',
                icon: 'img/services/6.svg',
                title: 'Shop Online',
                text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti quos dolores et quas.'
            },
        ]
    },
})


new Vue({
    el: '#testimonials-blocks',
    data: {
        blocks: [
            {
                link: '#',
                foto: 'img/testimonials/1.jpg',
                name: 'Cullen Bohannon',
                text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua. Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore.”'
            },
            {
                link: '#',
                foto: 'img/testimonials/2.jpg',
                name: 'Jennifer Thomas',
                text: '“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ipsam voluptatem aspernatur.”'
            },
        ]
    },
})