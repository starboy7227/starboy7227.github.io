module.exports = {
    theme: 'vuepress-theme-default-prefers-color-scheme',

    themeConfig: {
        logo: '/images/logo.png',
        overrideTheme: 'dark',
        nav:[
            {text:'Home', link:'/'},
            {text:'Github', link:'https://github.com/starboy7227'},
            {
                text: 'SocialMedia',
                ariaLabel: 'SocialMedia',
                items: [
                { text: 'Facebook', link: 'https://reurl.cc/WRryML' },
                { text: 'IG', link: 'https://www.instagram.com/ethan_hoooo/' },
                ]
            }
        ],
        
        sidebar: [
            {
                title: 'About me',      
                path: '/About_me/',     
                collapsable: false, 
                children: [
                  '/About_me/Introduction/'
                ]
            },

            {
                title: 'Step behind',      
                path: '/Step behind/',     
                collapsable: false, 
                children: [
                    '/Step behind/What is \'step behind\'/',
                    '/Step behind/Ignorance and arrogant/'
                ]
            },
            
            
        ],

    },

    plugins: [
        '@vuepress/back-to-top'
    ],


    title: 'Ethan\'s blog',
    dest: 'docs'
}